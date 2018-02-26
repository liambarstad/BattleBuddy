import React, { Component } from 'react'
import { Image, View, TouchableHighlight } from 'react-native'
const intToBool = require('../../../helpers/gen-helper').intToBool
import { alarmStyles } from '../../../styles'

const getImage = (active) => {
   active ?
    <Image 
      source={require('../../../assets/alarm/clock-active.png')} 
      style={alarmStyles.icon}
    /> :
    <Image 
      source={require('../../../assets/alarm/clock-inactive.png')}
      style={alarmStyles.icon}
    />
}

export default ActiveButton = (props) => {
  return (
    <TouchableHighlight
      onPress={props.toggle}
    >
      <View style={alarmStyles.alarmClock}>
        { getImage(intToBool(props.active)) }
      </View>
    </TouchableHighlight>
  )
}
