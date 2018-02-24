import React, { Component } from 'react'
import { Image, TouchableHighlight } from 'react-native'
const intToBool = require('../../../helpers/gen-helper').intToBool
const styles = require('../../../styles')

export default ItineraryButton = (props) => {
  if (intToBool(props.active)) {
    return (
      <TouchableHighlight>
        <Image
          source={require('../../../assets/alarm/itinerary-button-active.png')}
        />
      </TouchableHighlight>
    )
  } else {
    return (
      <TouchableHighlight>
        <Image
          source={require('../../../assets/alarm/itinerary-button-inactive.png')}
        />
      </TouchableHighlight>
    )
  }
}
