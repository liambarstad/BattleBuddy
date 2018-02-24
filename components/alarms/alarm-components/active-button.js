import React, { Component } from 'react'
import { Image, TouchableHighlight } from 'react-native'
const intToBool = require('../../../helpers/gen-helper').intToBool
const styles = require('../../../styles')

const getImage = (active) => {
   active ?
    <Image source={require('../../../assets/alarm/clock-active.png')} /> :
    <Image source={require('../../../assets/alarm/clock-inactive.png')} />
}

export default ActiveButton = (props) => {
  return (
    <TouchableHighlight>
      { getImage(intToBool(props.active)) }
    </TouchableHighlight>
  )
}
