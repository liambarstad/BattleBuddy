import React, { Component } from 'react'
import { Image, TouchableHighlight } from 'react-native'
const intToBool = require('../../../helpers/gen-helper').intToBool
const styles = require('../../../styles')

const getImage = (active) => {
  active ?
    <Image source={require('../../../assets/alarm/itinerary-button-active.png')} /> :
    <Image source={require('../../../assets/alarm/itinerary-button-inactive.png')} />
}

export default ItineraryButton = (props) => {
  return (
    <TouchableHighlight>
      { getImage(intToBool(props.active)) }
    </TouchableHighlight>
  )
}
