import React from 'react'
import { Text } from 'react-native'
import { Permissions } from 'expo'
import { Location as LocationService } from 'expo'
import Location from '../components/locations/location'
import PreviousLocation from '../components/locations/previous-location'

const formatLocation = (data) => {
  return (
    <Location
      key={data.id}
      name={data.name}
      longitude={data.longitude}
      latitude={data.latitude}
    />
  )
}

const previousLocation = (data, callback) => {
  return (
    <PreviousLocation
      key={data.id}
      id={data.id}
      name={data.name}
      onSubmit={callback}
    />
  )
}

const validateNew = (info) => {
  return info
}

const verifyLocation = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION)
  return status
}

const getLocation = async () => {
  return await LocationService.getCurrentPositionAsync() 
}

module.exports = { formatLocation, previousLocation, verifyLocation, getLocation }
