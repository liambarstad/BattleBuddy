import React, { Component } from 'react'
import { Text, View } from 'react-native'
const intToBool = require('../../helpers/gen-helper').intToBool
import { mainTabStyles } from '../../styles'

const outerActive = (active) => {
  if (active) {
    mainTabStyles.tabOuterActive
  } else {
    mainTabStyles.tabOuterInactive
  }
}

const innerActive = (active) => {
  if (active) {
    return mainTabStyles.tabInnerActive
  } else {
    return mainTabStyles.tabInnerInactive
  }
}

const  textActive = (active) => {
  if (active) {
    return mainTabStyles.tabTextActive
  } else {
    return mainTabStyles.tabTextInactive
  }
}

export default  MainTab = (props) => {
  let active = intToBool(props.active)  
  return (
    <View style={mainTabStyles.mainTab}>
      <View 
        style={outerActive(active)}
        onPress={() => props.changeFunc(props.name)}
      >
        <View style={innerActive(active)}>
          <Text style={textActive(active)}>{props.name}</Text>
        </View>
      </View>
    </View>
          )
}
