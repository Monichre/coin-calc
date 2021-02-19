import React, { useEffect, useState } from 'react'
import Dashboard from './components/Dashboard'
import { initDB } from 'react-indexed-db'
import { getNomicsTicker } from './api/crypto/nomics.api'
import { compress, decompress } from 'compress-json'
import { CSVLink } from 'react-csv'
import { StoreConfig } from './api/store/store'
import { useInit } from './api/store/init'
import { useIndexedDB } from 'react-indexed-db'

function App() {
  // @ts-ignore

  const { tokens } = useInit()
  // useEffect(() => {

  //   getTicker()
  // }, [])

  return (
    <>
      {tokens && (
        <CSVLink filename={'tokenData'} data={tokens}>
          Download
        </CSVLink>
      )}
      <Dashboard tokens={tokens} tickerTokens={tokens} />
    </>
  )
}

export default App
