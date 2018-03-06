import React, { Component } from 'react'
import { View } from 'react-native'
import { mainTabStyles } from '../../styles'
import AlarmTab from './main-tabs/alarm-tab'
import LocationTab from './main-tabs/location-tab'
import ItineraryTab from './main-tabs/itinerary-tab'
import { boolToInt } from '../../helpers/gen-helper'


export default class MainTabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: this.props.active
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ active: nextProps.active })
  }

  switchTabs(active) {
    this.props.onPress(active)
  }

  render() {
    return (
      <View style={mainTabStyles.mainTabs}>      
        <AlarmTab
          ref='alarmTab'
          active={this.state.active}
          onPress={(active) => this.switchTabs(active)}
        />
        <LocationTab
          ref='locationTab'
          active={this.state.active}
          onPress={(active) => this.switchTabs(active)}
        />
        <ItineraryTab
          ref='itineraryTab'
          active={this.state.active}
          onPress={(active) => this.switchTabs(active)}
        />
      </View>
        )
  }
}
