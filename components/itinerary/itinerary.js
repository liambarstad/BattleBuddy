import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
const ItineraryModel = require('../../models/itinerary-item-model')

export default class Itinerary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itinerary: []
    }
  }

  componentDidMount() {
    ItineraryModel.getAll()
      .then(itinerary => {
        this.setState({ itinerary })
      })
  }

  render() {
    return (
      <ScrollView>
        { this.state.itinerary }
      </ScrollView>
        )
  }

}
