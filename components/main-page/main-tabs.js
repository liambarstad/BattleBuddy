import React from 'react'
import { View } from 'react-native'
const styles = require('../../styles')
const { default: MainTab } = require('./main-tab')

const isActive = (active, name) => {
  return boolToInt(Boolean(active === name))
}

export default  MainTabs = (props) => {
  return (
    <View>
      <MainTab 
        name="alarms"  
        active={isActive(props.active, "alarms")} />
      <MainTab 
        name="locations" 
        active={isActive(props.active, "locations")} />
      <MainTab 
        name="itinerary" 
        active={isActive(props.active, "itinerary")} />
    </View>
      )
}
