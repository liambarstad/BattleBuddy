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

  truncateName() {
    let truncated = this.state.name.slice(0, 21)
    if (truncated.length > 20) {
      truncated += '...'
    }
    return truncated
  }

  render() {
    return (
      <View style={mainListing.component}>
        <View>
          <Text
            style={locationStyles.title} 
          >
            { this.truncateName() }
          </Text>
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
