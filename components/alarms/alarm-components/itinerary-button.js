import React, { Component } from 'react'
import { Image, View, TouchableHighlight } from 'react-native'
import { alarmStyles } from '../../../styles'
const intToBool = require('../../../helpers/gen-helper').intToBool

const getImage = (active) => {
  active ?
    <Image 
      source={require('../../../assets/main/itinerary-button-active.png')} 
    /> :
    <Image 
      source={require('../../../assets/main/itinerary-button-inactive.png')} 
    />
}

export default ItineraryButton = (props) => {
  return (
    <TouchableHighlight
      style={alarmStyles.icon}
      onPress={props.toggle}
    >
      <View>
        { getImage(intToBool(props.active)) }
      </View>
    </TouchableHighlight>
  )
}
