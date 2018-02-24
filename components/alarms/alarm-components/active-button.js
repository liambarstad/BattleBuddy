import React, { Component } from 'react'
import { Image, TouchableHighlight } from 'react-native'
const intToBool = require('../../../helpers/gen-helper').intToBool
const styles = require('../../../styles')

export default ActiveButton = (props) => {
  if (intToBool(props.active)) {
    return (
      <TouchableHighlight>
        <Image
          source={require('../../../assets/alarm/clock-active.png')}
        />
      </TouchableHighlight>
    )
  } else {
    return (
      <TouchableHighlight>
        <Image
          source={require('../../../assets/alarm/clock-inactive.png')}
        />
      </TouchableHighlight>
    )
  }
}
