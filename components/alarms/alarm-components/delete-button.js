import React, { Component } from 'react'
import { Image, TouchableHighlight } from 'react-native'
const intToBool = require('../../../helpers/gen-helper').intToBool
const styles = require('../../../styles')

export default DeleteButton = (props) => {
  return (
    <TouchableHighlight>
      <Image
        source={require('../../../assets/alarm/delete-button.png')
      />
    </TouchableHighlight>
  )
}
