// @ts-nocheck

import React, { useState } from 'react'
import { Row, Card, Select, Link, Button, Col, Dot, Tag } from '@geist-ui/react'
import { useForm, Controller } from 'react-hook-form'
import DatePicker from 'react-date-picker'

export interface CoinProfitFormProps {
  tokens: any //{ value: string; label: string }[]
}

type FormData = {
  date: any
  token: any
}

export const CoinProfitForm: React.FC<CoinProfitFormProps> = ({
  tokens,
}: any) => {
  const { control, register, handleSubmit } = useForm<FormData>()
  const [date, setDate] = useState(null)
  const [token, setToken] = useState(null)

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='date'
        control={control}
        defaultValue=''
        render={({ onChange, value }) => (
          <DatePicker onChange={onChange} value={value} />
        )}
      />
      <Select placeholder='Choose one' ref={register} name='token'>
        {tokens.map((token) => (
          <Select.Option key={token.symbol} value={token.symbol}>
            {token.symbol}
          </Select.Option>
        ))}
      </Select>
      <input type='submit' />
    </form>
  )
}
