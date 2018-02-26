import React, { Component } from 'react'
import { Text, View } from 'react-native'
const e = React.createElement

export default MainContent = (props) => {
  //const filepath = `../${props.name}/${props.name}` 
  const mod = require('../alarms/alarms').default
  return e(mod, {}, null)
}
