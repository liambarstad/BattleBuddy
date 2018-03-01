import React from 'react'
import { Text } from 'react-native'
import { formatTime } from './time-helper'
import { boolToInt } from './gen-helper'
const Alarm = require('../components/alarms/alarm').default
//import { Alarm } from '../components/alarms/alarm'

const validateNew = (obj={}) => {
  let info = {}
  info.active = obj.active ?
    parseInt(obj.active) :
    0
  info.time = obj.time || formatTime(new Date)
  info.itemized = obj.itemized ?
    parseInt(obj.itemized) :
    0
  info.localized = obj.localized ?
    parseInt(obj.localized) :
    0
  return info
}

const formatAlarm = (alarm) => {
  return <Alarm
    key={alarm.id.toString()}
    id={alarm.id.toString()}
    active={boolToInt(alarm.active)}
    time={alarm.time}
    itemized={boolToInt(alarm.itemized)}
    localized={boolToInt(alarm.localized)}
  />
}

module.exports = { validateNew, formatAlarm }
