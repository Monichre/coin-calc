import React from 'react'
import {
  GeistUIThemes,
  Button,
  Text,
  Link,
  Card,
  Dot,
  Tag,
} from '@geist-ui/react'
import makeStyles from '../makeStyles'
import * as Icons from 'react-feather'

interface Props {
  heading?: string
  timeStamp?: string
  title?: string
  children?: any
}

export const useInfoCardStyles = makeStyles((ui: GeistUIThemes) => ({
  card: {
    padding: '0 !important',
    marginBottom: `calc(${ui.layout.gap}*1.5) !important`,
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: ui.layout.gap,
    '& h3': {
      margin: 0,
    },
  },
  timeStamp: {
    fontSize: 14,
    color: 'rgb(153, 153, 153) !important',
    margin: `0 0 0 ${ui.layout.gapHalf}`,
    textAlign: 'right',
  },
  visitButton: {},
  '@media screen and (max-width: 540px)': {
    timeStamp: {
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
  title: {
    fontSize: 14,
    fontWeight: 500,
    marginLeft: '6px !important',
  },
}))

const InfoCard = ({ heading, timeStamp, title, children }: Props) => {
  const classes = useInfoCardStyles()
  return (
    <Card shadow className={classes.card}>
      {heading && (
        <div className={classes.heading}>
          <Text h3>{heading}</Text>
        </div>
      )}
      <div className={classes.content}>
        {children}
        {/* <Dot type='success' className={classes.dot}>
          <Link pure>{heading}.vercel.app</Link>
          <Tag className={classes.tag} type='secondary'>
            Production
          </Tag>
          <span className={classes.timeStamp}>{timeStamp}</span>
        </Dot>
        <Dot type='success' className={classes.dot}>
          <Link pure>{heading}-oa71gi2.vercel.app</Link>
          <Tag className={classes.tag} type='secondary'>
            Latest
          </Tag>
          <span className={classes.timeStamp}>{timeStamp}</span>
        </Dot> */}
      </div>
      {title && (
        <Card.Footer className={classes.footer}>
          <Icons.GitHub size={14} />
          <Text className={classes.title}>{title}</Text>
        </Card.Footer>
      )}
    </Card>
  )
}

export default InfoCard
