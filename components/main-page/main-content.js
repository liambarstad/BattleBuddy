import React, { Component } from 'react'
import { Text, View } from 'react-native'
const styles = require('../../styles')
const e = React.createElement

export default MainContent = (props) => {
  const mod = require(`./${props.name}.js`).default
  return e(mod, {}, null)
}
