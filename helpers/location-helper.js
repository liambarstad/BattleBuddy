import React from 'react'
import { Text } from 'react-native'
import { Permissions, Location } from 'expo'

const formatLocation = (data) => {
  return <Text>location goes here</Text>
}

const validateNew = (info) => {
  return info
}

const verifyLocation = async () => {
  let { status } = await Permissions.getAsync(Permissions.LOCATION)
  if (status != 'granted') {
    status = await Permissions.askAsync(Permissions.LOCATION).status
    if (status === 'granted') {
      const location = await getLocation() 
    } else {
      return null
    }
  } else {
    const location = await getLocation()
    return location
  }
}

const getLocation = async () => {
  const location = await Location.getCurrentPosition({ enableHighAccuracy: true }) 
  return location
}

module.exports = { verifyLocation }
