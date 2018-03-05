import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { previousListing } from '../../styles'

export default PreviousLocation = (props) => {
  return (
    <View style={previousListing.component}>
      <TouchableHighlight
        onPress={() => props.onSubmit(props.id, props.name)}
      >
        <Text style={previousListing.text}>{ props.name }</Text>
      </TouchableHighlight>
    </View>
  )
}
