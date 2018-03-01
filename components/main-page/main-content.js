import React, { Component } from 'react'
import { Text, View } from 'react-native'
const e = React.createElement

export default class MainContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: this.props.active
    }
  }

  render() {
    if (this.state.active === 'alarms') {
      const Alarms = require('../alarms/alarms').default
      return <Alarms />
    } else if (this.state.active === 'itinerary') {
      const Itinerary = require('../itinerary/itinerary').default
      return <Itinerary />
    } else {
      const Locations = require('../locations/locations').default
      return <Locations />
    }
  }

}
