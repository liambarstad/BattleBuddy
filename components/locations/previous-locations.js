import React, { Component } from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import { shared } from '../../styles'
const LocationModel = require('../../models/location-model')

export default class PreviousLocations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
    }
  }

  componentDidMount() {
    LocationModel.getAllPrevious(this.props.onPress)
      .then(locations => this.setState({ locations }))
  }

  locations() {
    if (this.state.locations.length > 0) {
      return this.state.locations
    } else {
      return (
        <Text>No Saved Locations</Text>
      )
    }
  }

  render() {
    return (
      <View style={shared.form}>
        <ScrollView>
          { this.locations() } 
        </ScrollView>
      </View>
    )
  }
}
