import { formatAlarm } from '../helpers/alarm-helper'
import React from 'react'
import { Text } from 'react-native'
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

module.exports = { getAll, create }
