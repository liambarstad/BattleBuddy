import React, { Component } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
const intToBool = require('../../helpers/gen-helper').intToBool
import { mainTabStyles } from '../../styles'

const activeStyle = (active) => {
  if (intToBool(active)) {
    return mainTabStyles.tabActive
  } else {
    return mainTabStyles.tabInactive
  }
}

const tabImage = (name, active) => {
  if (name === 'alarms') {
    if (name === active) {
      return (
        <Image
          source={require('../../assets/main/clock-inactive.png')}
          style={mainTabStyles.icon}
        />
      )
    } else {
      return (
        <Image
          source={require('../../assets/main/clock-active.png')}
          style={mainTabStyles.icon}
        />
      )
    }
  } else if (name === 'itinerary') {
    if (name === active) {
      <Image
        source={require('../../assets/main/itinerary-button-inactive.png')}
        style={mainTabStyles.icon}
      />
    } else {
      <Image
        source={require('../../assets/main/itinerary-button-active.png')}
        style={mainTabStyles.icon}
      />
    }
  } else {
    if (name === active) {
      return (
        <Image
          source={require('../../assets/main/location-button-active.png')}
          style={mainTabStyles.icon}
        />
      )
    } else {
      return (
        <Image
          source={require('../../assets/main/location-button-inactive.png')}
          style={mainTabStyles.icon}
        />
      )
    }
  }
}

export default  MainTab = (props) => {
  return (
      <TouchableHighlight
        style={activeStyle(props.active)}
        onPress={props.changeFunc.bind(this)}
      >
        <View>
        { tabImage(props.name, props.active) } 
        </View>
      </TouchableHighlight>
          )
}
