import React from 'react'
import {
  format,
  formatDistance,
  formatDistanceToNow,
  formatRelative,
  parse,
  parseISO,
  subDays,
} from 'date-fns'
import { GeistUIThemes, Avatar, Text } from '@geist-ui/react'
import makeStyles from '../makeStyles'

interface Props {
  username: string
  avatar: string
  timeStamp: string
  children: string | React.ReactNode
}

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
  timeStamp: {
    color: 'rgb(153, 153, 153) !important',
    margin: '0 0 0 auto',
    paddingLeft: 10,
    textAlign: 'right',
  },
}))

const EventListItem = ({ children, username, avatar, timeStamp }: Props) => {
  console.log('timeStamp: ', timeStamp)
  const classes = useStyles()

  const date = formatDistanceToNow(parseISO(timeStamp))

  //=> "Today is a Wednesday"

  formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
  return (
    <div className={classes.root}>
      <Avatar
        alt={`${username} Avatar`}
        className={classes.avatar}
        src={avatar}
      />
      <Text className={classes.message}>{children}</Text>
      <Text className={classes.timeStamp}>{date}</Text>
    </div>
  )
}

export default EventListItem
