import React, { Component } from 'react'
import { Image, TouchableHighlight } from 'react-native'
import { alarmStyles } from '../../../styles'
import { intToBool } from '../../../helpers/gen-helper'
const AlarmModel = require('../../../models/alarm-model')

const destroy = (id) => {
  AlarmModel.destroy(id)
    .then(data => {

    })
}

export default DeleteButton = (props) => {
  return (
    <TouchableHighlight
      onPress={() => destroy(props.id)} 
    >
      <Image
        source={require('../../../assets/main/delete-button.png')}
        style={alarmStyles.icon}
      />
    </TouchableHighlight>
  )
}
