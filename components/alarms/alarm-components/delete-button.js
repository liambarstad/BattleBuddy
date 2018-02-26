import React, { Component } from 'react'
import { Image, TouchableHighlight } from 'react-native'
import { alarmStyles } from '../../../styles'
const intToBool = require('../../../helpers/gen-helper').intToBool

export default DeleteButton = (props) => {
  return (
    <TouchableHighlight
      onPress={() => props.destroy()} 
    >
      <Image
        source={require('../../../assets/alarm/delete-button.png')}
        style={alarmStyles.icon}
      />
    </TouchableHighlight>
  )
}
