import React, { Component } from 'react'
import { Image, View, TouchableHighlight } from 'react-native'
import { alarmStyles } from '../../../styles'
const intToBool = require('../../../helpers/gen-helper').intToBool

const getImage = (active) => {
  active ?
    <Image 
      source={require('../../../assets/alarm/itinerary-button-active.png')} 
      style={alarmStyles.icon}
    /> :
    <Image 
      source={require('../../../assets/alarm/itinerary-button-inactive.png')} 
      style={alarmStyles.icon}
    />
}

export default ItineraryButton = (props) => {
  return (
    <TouchableHighlight>
      <View>
        { getImage(intToBool(props.active)) }
      </View>
    </TouchableHighlight>
  )
}
