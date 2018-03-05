import React, { Component } from 'react'
import { Text, View, Image, TouchableHighlight } from 'react-native'
import { mainListing, alarmStyles } from '../../styles'
const boolToInt = require('../../helpers/gen-helper').boolToInt
import ActiveButton from './alarm-components/active-button'
import ItineraryButton from './alarm-components/itinerary-button'
import LocationButton from './alarm-components/location-button'
import DeleteButton from './alarm-components/delete-button'

export default class Alarm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: this.props.active,
      time: this.props.time,
      itemized: this.props.itemized,
      localized: this.props.localized,
      editing: false,
    }
  }

  toggleActive() {
    
    //const active = !this.state.active
    //const id = this.state.id 
    //AlarmModel.toggleActive(id)
    //this.setState({active})
  }

  destroy() {

  }

  render() {
    return (
      <View style={mainListing.component}>
        <ActiveButton 
          active={this.state.active} 
          toggle={() => this.toggleActive(this.props.id)}
        />

        <View>
          <Text 
            style={alarmStyles.alarmTime}>
            { this.state.time }
          </Text>
        </View>

        <LocationButton 
          active={this.state.localized}
        />

        <ItineraryButton 
          active={this.state.itemized} 
        />

        <DeleteButton 
          destroy={() => this.destroy(this.props.id)}
        />
      </View>
        )
  }

}
