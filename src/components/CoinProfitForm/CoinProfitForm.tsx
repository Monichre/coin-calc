import React, { useEffect, useState } from 'react'
import {
  Row,
  Card,
  Select,
  Link,
  Button,
  Col,
  Dot,
  Tag,
  Text,
  Avatar,
  Fieldset,
  Description,
  Display,
  Grid,
  Divider,
  Note,
  User,
} from '@geist-ui/react'
import { useForm, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import { formatRFC3339 } from 'date-fns'

import 'react-datepicker/dist/react-datepicker.css'
import {
  getPastTrades,
  getBalances,
  getTradeHistory,
} from '../../api/crypto/gemini.api'
import { getPriceHistory } from '../../api/crypto/nomics.api'
import InfoCard, { useInfoCardStyles } from '../InfoCard'
export interface CoinProfitFormProps {
  tokens: any //{ value: string; label: string }[]
}

type FormData = {
  date: any
  token: any
}

export interface TokenButtonProps {
  onClick: any
  token: any
  active: boolean
}

const TokenButton: React.FC<TokenButtonProps> = ({
  onClick,
  token,
  active,
}) => {
  const classes = useInfoCardStyles()
  const handleClick = () => {
    onClick(token.symbol)
  }
  const Wrap = ({ children }) =>
    active ? (
      <Dot type='success' className={classes.dot}>
        {children}
      </Dot>
    ) : (
      <> {children}</>
    )
  return (
    <Wrap>
      <Button
        onClick={handleClick}
        effect
        shadow={active}
        icon={
          <Avatar alt={`${token.id} Avatar`} size='mini' src={token.logo} />
        }
        auto
        style={
          active
            ? {
                backgroundColor: '#50e3c2 !important',
              }
            : {}
        }

        // size='small'
      >
        <Text
          style={{
            marginLeft: '10px !important',
          }}
        >
          {token.symbol}
        </Text>
      </Button>
    </Wrap>
  )
}

export const CoinProfitForm: React.FC<CoinProfitFormProps> = ({
  tokens,
}: any) => {
  console.log('tokens: ', tokens)
  const classes = useInfoCardStyles()
  const [tokenEntries, setTokenEntries]: any = useState([])
  const [date, setDate]: any = useState(new Date())
  const [token, setToken] = useState(null)

  const onChange = (data) => {
    console.log(data)
    setDate(data)
  }
  const handler = (val) => setToken(val)

  const addTokenEntry = async () => {
    if (date && token) {
      const formatted = formatRFC3339(date)
      const theToken = tokens.find((t) => t.symbol === token)
      const { currentPrice, purchasePrice, delta }: any = await getPriceHistory(
        token,
        formatted
      )
      const latestTokenEntry = {
        ...theToken,
        profitData: {
          currentPrice,
          purchasePrice,
          delta,
        },
      }

      setTokenEntries((tokenEntries) => [...tokenEntries, latestTokenEntry])
    }
  }

  return (
    <Grid.Container gap={2} justify='center'>
      <Grid xs={16}>
        <Fieldset>
          <Fieldset.Title>Choose a token and the date purchased</Fieldset.Title>
          {/* <Fieldset.Subtitle>Click Add to begin tallying multiple token purchases</Fieldset.Subtitle> */}
          <Description
            title={null}
            content={<DatePicker onChange={onChange} selected={date} />}
          />
          <Display shadow caption='Choose a token'>
            <Grid.Container gap={2} justify='center'>
              {tokens.map((t) => (
                <Grid xs={6}>
                  <TokenButton
                    token={t}
                    onClick={handler}
                    active={t.symbol === token}
                  />
                </Grid>
              ))}
            </Grid.Container>
          </Display>

          <Fieldset.Footer>
            <Fieldset.Footer.Status>
              Click Add to begin tallying multiple token purchases
            </Fieldset.Footer.Status>
            <Fieldset.Footer.Actions>
              <Button auto size='mini' onClick={addTokenEntry}>
                Add
              </Button>
            </Fieldset.Footer.Actions>
          </Fieldset.Footer>
        </Fieldset>
      </Grid>

      <Grid xs={8}>
        <InfoCard
          heading='Token Positions'
          // title='Enter your token holdings'
          // timeStamp='today'
        >
          {tokenEntries.map((entry) => (
            <User src={entry.logo} name={entry.symbol}>
              {entry.profitData.delta}
            </User>
            // <Dot type='success' className={classes.dot}>
            //   <Note label={entry.symbol}>
            //     <Avatar
            //       alt={`${entry.id} Avatar`}
            //       size='mini'
            //       src={entry.logo}
            //     />
            //     <Text className={classes.timeStamp}>
            //       {entry.profitData.delta}
            //     </Text>

            // <Divider />
            //   {/* <Tag className={classes.tag} type='secondary'>
            //   Purchase Price: {entry.profitData.purchasePrice}
            // </Tag>
            // <Tag className={classes.tag} type='secondary'>
            //   Current Price: {entry.profitData.currentPrice}
            // </Tag> */}
            //   </Note>
            // </Dot>
          ))}
        </InfoCard>
      </Grid>
    </Grid.Container>
  )
}
