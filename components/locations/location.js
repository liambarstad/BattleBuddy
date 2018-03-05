import React, { Component } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import { mainListing, locationStyles } from '../../styles'

export default class Location extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      longitude: this.props.longitude,
      latitude: this.props.latitude,
    }
  }

  render() {
    return (
      <View style={mainListing.component}>
        <View style={locationStyles.title}>
          <Text>{ this.state.name }</Text>
        </View>

        <TouchableHighlight>
          <Image
            source={require('../../assets/main/edit-button.png')}
            style={locationStyles.editButton}
          />
        </TouchableHighlight>
      </View>
    )
  }
  
}
