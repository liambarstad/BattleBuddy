import React, { Component } from 'react'
import { Image, View, TouchableHighlight } from 'react-native'
const intToBool = require('../../../helpers/gen-helper').intToBool
import { alarmStyles } from '../../../styles'

const getImage = (active) => {
   active ?
    <Image 
      source={require('../../../assets/main/clock-active.png')} 
    /> :
    <Image 
      source={require('../../../assets/main/clock-inactive.png')}
    />
}

export default ActiveButton = (props) => {
  return (
    <TouchableHighlight
      style={alarmStyles.icon}
      onPress={props.toggle}
    >
      <View style={alarmStyles.alarmClock}>
        { getImage(intToBool(props.active)) }
      </View>
    </TouchableHighlight>
  )
}
