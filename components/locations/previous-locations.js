import React, { Component } from 'react'
import { Modal } from 'react-native'
const LocationModel = require('../../models/location-model')

export default class PreviousLocations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
      pickedLocation: null,
    }
  }

  componentDidMount() {
    LocationModel.getAllSelection(this.pickLocation)
      .then(locations => this.setState({ locations }))
  }

  pickLocation(pickedLocation) {
    this.setState({ pickedLocation }) 
  }

  render() {
    { this.state.locations } 
  }
}
