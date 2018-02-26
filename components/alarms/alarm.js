import React, { Component } from 'react'
import { Text, View, Image, TouchableHighlight } from 'react-native'
import { alarmStyles } from '../../styles'
const boolToInt = require('../../helpers/gen-helper').boolToInt
const ActiveButton = require('./alarm-components/active-button').default
const ItineraryButton = require('./alarm-components/itinerary-button').default
const LocationButton = require('./alarm-components/location-button').default
const DeleteButton = require('./alarm-components/delete-button').default

export default class Alarm extends Component {
  constructor(props) {
    super(props)
    this.state = JSON.parse(this.props.info)
  }

  toggleActive = async () => {
    const active = !this.state.active
    const id = this.state.id 
    await AlarmModel.toggleActive(id)
    this.setState({active})
  }

  destroy = async () => {

  }

  render() {
    return (
      <View style={alarmStyles.alarm}>
        <ActiveButton 
          active={boolToInt(this.state.active)} 
          toggle={() => this.toggleActive(this.state.id)}
        />

        <View>
          <Text 
            style={alarmStyles.alarmTime}>
            { this.state.time }
          </Text>
        </View>

        <LocationButton 
          active={boolToInt(this.state.localized)}
        />

        <ItineraryButton 
          active={boolToInt(this.state.itemized)} 
        />

        <DeleteButton 
          destroy={this.destroy}
        />
      </View>
        )
  }

}
