import React, { Component } from 'react'
import { Text, View } from 'react-native'
const intToBool = require('../../helpers/gen-helper').intToBool
const styles = require('../../styles')

const outerActive = (active) => {
  if (active) {
    styles.tabOuterActive
  } else {
    styles.tabOuterInactive
  }
}

const innerActive = (active) => {
  if (active) {
    return styles.tabInnerActive
  } else {
    return styles.tabInnerInactive
  }
}

const  textActive = (active) => {
  if (active) {
    return styles.tabTextActive
  } else {
    return styles.tabTextInactive
  }
}

export default  MainTab = (props) => {
  let active = intToBool(props.active)  
  return (
    <View 
      style={outerActive(active)}
      onPress={() => props.onPress()}
    >
      <View style={innerActive(active)}>
        <Text style={textActive(active)}>{props.name}</Text>
      </View>
    </View>
          )
}
