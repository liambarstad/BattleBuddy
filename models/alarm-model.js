import { formatAlarm } from '../helpers/alarm-helper'
import React from 'react'
import { Text } from 'react-native'
import { boolToInt } from '../helpers/gen-helper'
const Scheduler = require('../notifications/scheduler')
const axios = require('react-native-axios')
axios.defaults.baseURL = 'https://battle-buddy-backend-v1.herokuapp.com/api/v1'

const getAll = async () => {
  const { data } = await axios.get('/alarms')
  let alarms = []
  data.forEach(alarm => {
    alarms.push(formatAlarm(alarm)) 
  })
  return alarms
}

const create = async (info) => {
  const { data } = await axios.post('/alarms', info)
  return formatAlarm(data)
}

const toggleActive = async (id, desiredValue) => {
  const info = { active: boolToInt(desiredValue) }
  const { data } = await axios.patch(`/alarms/${id}`, info)
  if (data.active === desiredValue) {
    let alarmSet = Scheduler.setAlarm(id)
    return alarmSet
  } else {
    return false
  }
}

module.exports = { getAll, create, toggleActive }
