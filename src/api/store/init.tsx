// @ts-nocheck
import React, { useEffect, useState } from 'react'

import { getNomicsTicker } from '../crypto/nomics.api'

import { initDB, useIndexedDB } from 'react-indexed-db'
import { StoreConfig } from './store'

export const chunk = (arr: Array<any>, size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )

const formatTokenData = (items) => {
  // const tokenData = items.map(({ symbol, price }: any) => ({ symbol, price }))
  const tokenData = items.map(
    ({ symbol, price, logo_url, price_timestamp, id, ...rest }: any) => {
      console.log('rest: ', rest)
      const { volume, price_change_pct } = rest['1d'] || {
        volume: null,
        price_change_pct: 0,
      }
      return {
        symbol,
        price,
        id,
        volume,
        priceChange: price_change_pct,
        logo: logo_url,
        time: price_timestamp,
      }
    }
  )
  return { tokenData }
}

const chunkAndCache = (res) => {}

const fetchCache = () => {}

const handleResponse = (res) => {
  // chunkAndCache(res)
  return formatTokenData(res)
}

export const useInit = () => {
  initDB(StoreConfig)
  const { add } = useIndexedDB('nomics-cache')

  const [tokens, setTokens]: any = useState([])

  useEffect(() => {
    const getStore = async () => {
      const res = await getNomicsTicker()

      const { tokenData } = formatTokenData(res)
      console.log('tokenData: ', tokenData)
      tokenData.map((token) => {
        add(token)
      })
      setTokens(tokenData)
    }
    getStore()
  }, [])
  return { tokens }
}
