import { formatLocation, previousLocation } from '../helpers/location-helper'
import React from 'react'
import { Text } from 'react-native'
const axios = require('react-native-axios')
axios.defaults.baseURL = 'https://battle-buddy-backend-v1.herokuapp.com/api/v1'

const getAll = async () => {
  const { data } = await axios.get('/locations')
  let locations = []
  data.forEach(location => {
    locations.push(formatLocation(location))
  })
  return locations
}

const getAllPrevious = async (callback) => {
  const { data } = await axios.get('/locations')
  let locations = []
  data.forEach(location => {
    locations.push(previousLocation(location, callback))
  })
  return locations
}

const create = async (info) => {
  const { data } = await axios.post('/locations', info)
  return formatLocation(data)
}

module.exports = { getAll, getAllPrevious, create }
