import React from 'react'
import { View } from 'react-native'
import { mainTabStyles } from '../../styles'
const boolToInt = require('../../helpers/gen-helper').boolToInt
const { default: MainTab } = require('./main-tab')

const isActive = (active, name) => {
  return boolToInt(Boolean(active === name))
}

export default  MainTabs = (props) => {
  return (
    <View style={mainTabStyles.mainTabs}>      
      <MainTab 
        name="alarms"  
        active={isActive(props.active, "alarms")} 
        changeFunc={(active) => props.changeFunc(active)}
      />
      <MainTab 
        name="locations" 
        active={isActive(props.active, "locations")}
        changeFunc={(active) => props.changeFunc(active)}
      />
      <MainTab 
        name="itinerary" 
        active={isActive(props.active, "itinerary")}
        changeFunc={(active) => props.changeFunc(active)}
      />
    </View>
      )
}
