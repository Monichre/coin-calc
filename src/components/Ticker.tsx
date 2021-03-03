import React from 'react'
import { GeistUIThemes, Text, Link, Card } from '@geist-ui/react'
import makeStyles from '../makeStyles'
import EventListItem from './EventListItem'
import InfoCard from './InfoCard'

const useStyles = makeStyles((ui: GeistUIThemes) => ({
  root: {
    backgroundColor: ui.palette.accents_1,
    height: 600,
    overflow: 'scroll',
  },
  content: {
    width: ui.layout.pageWidthWithMargin,
    maxWidth: '100%',
    boxSizing: 'border-box',
    margin: '0 auto',
    padding: `0 ${ui.layout.pageMargin}`,
    transform: 'translateY(-35px)',
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    minWidth: 1,
    maxWidth: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  projects: {
    width: '100%',
  },
  activity: {
    flex: 1,
  },
  [`@media screen and (min-width: ${ui.layout.pageWidthWithMargin})`]: {
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    projects: {
      width: 540,
      maxWidth: '100%',
      marginRight: 80,
    },
    activityTitle: {
      marginTop: '0 !important',
      marginBottom: 30,
      fontSize: '14px !important',
      textAlign: 'start !important',
    },
    viewAll: {
      marginBottom: '0 !important',
      textAlign: 'start !important',
    },
  },
  viewAll: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: ui.layout.gap,
    textAlign: 'center',
  },
  activityTitle: {
    fontWeight: 700,
    marginTop: ui.layout.gap,
    fontSize: 24,
    textAlign: 'center',
  },
}))

export const Ticker = ({ tickerTokens }: any) => {
  // const classes = useStyles()
  return (
    <InfoCard heading='Token Feed' title='Data From Nomics' timeStamp='1hr'>
      {tickerTokens.map((token: any) => (
        <EventListItem
          username={token.symbol}
          avatar={token.logo}
          timeStamp={token.time}
        >
          <b>{token.symbol}:</b> <span>{token.price}</span>
        </EventListItem>
      ))}
    </InfoCard>
  )
}
