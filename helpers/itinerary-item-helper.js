import React from 'react'
import { Text } from 'react-native'
import ItineraryItem from '../components/itinerary/itinerary-item'

const formatItineraryItem = (item) => {
  return <ItineraryItem
    name={item.name}
    time={item.time}
    timeUnit={item.time_unit}
  />
}

module.exports = { formatItineraryItem }
