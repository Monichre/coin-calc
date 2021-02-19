import React, { useState } from 'react'
import Menu from './Menu'
import Heading from './Heading'
import { Ticker } from './Content'
import Footer from './Footer'
import DatePicker from 'react-date-picker'
import { Row, Card, Select, Link, Button, Col, Dot, Tag } from '@geist-ui/react'
import { GeistUIThemes, Avatar, Text } from '@geist-ui/react'
import makeStyles from '../makeStyles'
import * as Icons from 'react-feather'
import { CoinProfitForm } from './CoinProfitForm/CoinProfitForm'

// interface Props {
//   username: string;
//   avatar: string;
//   created: string;
//   children: string | React.ReactNode;
// }

const useStyles = makeStyles((ui: GeistUIThemes) => ({
  root: {
    borderBottom: `solid 1px ${ui.palette.accents_2}`,
    padding: '10px 0px',
    alignItems: 'center',
    display: 'flex',
    fontSize: 14,
  },
  avatar: {
    width: '32px !important',
    height: '32px !important',
    marginRight: '10px !important',
  },
  message: {
    margin: 0,
    flex: 1,
  },
  created: {
    color: 'rgb(153, 153, 153) !important',
    margin: '0 0 0 auto',
    paddingLeft: 10,
    textAlign: 'right',
  },
  card: {
    padding: '0 !important',
    marginBottom: `calc(${ui.layout.gap}*1.5) !important`,
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: ui.layout.gap,
    '& h3': {
      margin: 0,
    },
  },
  // created: {
  //   fontSize: 14,
  //   color: 'rgb(153, 153, 153) !important',
  //   margin: `0 0 0 ${ui.layout.gapHalf}`,
  //   textAlign: 'right'
  // },
  visitButton: {},
  '@media screen and (max-width: 540px)': {
    created: {
      display: 'none !important',
    },
    visitButton: {
      display: 'none !important',
    },
  },
  dot: {
    display: 'flex !important',
    marginTop: ui.layout.gapQuarter,
    '& .icon': {
      backgroundColor: '#50e3c2 !important',
    },
    '& .label': {
      textTransform: 'none !important',
      display: 'flex',
      flex: 1,
      overflow: 'hidden',
    },
    '& .label a': {
      display: 'inline-block',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      fontSize: 14,
      lineHeight: 'normal',
    },
    '& .link': {
      fontWeight: 500,
    },
  },
  tag: {
    display: 'flex !important',
    alignItems: 'center',
    textTransform: 'capitalize !important',
    fontSize: '12px !important',
    padding: '3px 7px !important',
    borderRadius: '16px !important',
    height: 'unset !important',
    marginLeft: 8,
    color: `${ui.palette.foreground} !important`,
  },
  footer: {
    display: 'flex !important',
    alignItems: 'center !important',
    height: 50,
    width: '100% !important',
  },
  repo: {
    fontSize: 14,
    fontWeight: 500,
    marginLeft: '6px !important',
  },
}))

const TickerItem = (props: any) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {/* <Avatar alt={`${username} Avatar`} className={classes.avatar} src={avatar} /> */}
      <Text className={classes.message}>test</Text>
      <Text className={classes.created}>test</Text>
    </div>
  )
}

const Dashboard = ({ tokens, tickerTokens }: any) => {
  const classes = useStyles()

  return (
    <>
      <Menu />
      <Heading />
      <Card shadow className={classes.card}>
        <CoinProfitForm tokens={tokens} />
        <Card.Footer className={classes.footer}>
          <Icons.GitHub size={14} />
          <Text className={classes.repo}>meh</Text>
        </Card.Footer>
      </Card>
      <Ticker tickerTokens={tickerTokens} />
      <Footer />
    </>
  )
}

export default Dashboard
