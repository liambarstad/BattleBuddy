import React, { Component } from 'react'
import { Image, TouchableHighlight } from 'react-native'
const intToBool = require('../../../helpers/gen-helper').intToBool
const styles = require('../../../styles')

const getImage = (active) => {
  active?
    <Image source={require('../../../assets/alarm/location-button-active.png')} /> :
    <Image source={require('../../../assets/alarm/location-button-inactive.png')} />
}
    
export default LocationButton = (props) => {
  return (
    <TouchableHighlight>
      { getImage(intToBool(props.active)) }
    </TouchableHighlight>
  )
}
