import React, { Component } from 'react'
import Alarms from '../alarms/alarms'
import Locations from '../locations/locations'
import Itinerary from '../itinerary/itinerary'
import { Text, View } from 'react-native'
import { appStyles } from '../../styles'

export default class MainContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: this.props.active,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ active: nextProps.active })
  }

  main() {
    if (this.state.active === 'alarms') {
      return <Alarms />
    } else if (this.state.active === 'locations') {
      return <Locations />
    } else if (this.state.active === 'itinerary') {
      return <Itinerary />
    }
  }

  render() {
    return (
      <View style={appStyles.mainContent}>
        { this.main() }
      </View>
    )
  }

}
