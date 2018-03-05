import React, { Component } from 'react'
import { Modal, Text } from 'react-native'
import { MapView } from 'expo'
import PreviousLocations from './previous-locations'

export default class LocationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      withPrev: this.props.prev || false,      
    }
  }

  prev() {
    if (this.state.withPrev) {
      return (
        <PreviousLocations />
      )
    }
  }

  render() {
    return (
      <Text>Fack You</Text>
    )
  }
}
