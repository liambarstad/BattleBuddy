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
        changeFunc={props.changeFunc}
      />
      <MainTab 
        name="locations" 
        active={isActive(props.active, "locations")}
        changeFunc={props.changeFunc}
      />
      <MainTab 
        name="itinerary" 
        active={isActive(props.active, "itinerary")}
        changeFunc={props.changeFunc}
      />
    </View>
      )
}
