import React, { Component } from 'react'
import { Text, View } from 'react-native'
const e = React.createElement

export default MainContent = (props) => {
  //const filepath = `../${props.name}/${props.name}` 
  //const mod = require('../alarms/alarms').default
  if (props.name === 'alarms') {
    component = require('../alarms/alarms').default
  } else if (props.name === 'itinerary') {
    component = require('../itinerary/itinerary').default
  } else if (props.name === 'locations') {
    component = require('../locations/locations').default
  }
  return e(component, {}, null)
}
