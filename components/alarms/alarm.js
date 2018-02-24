import React, { Component } from 'react'
import { ActiveButton } from './alarm-components/active-button'
import { ItineraryButton } from './alarm-components/itinerary-button'
import { LocationButton } from './alarm-components/location-button'
import { Text, View, Image, TouchableHighlight } from 'react-native'
const styles = require('../../styles') 

export default class Alarm extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.info.json()
  }

  render() {
    return (
      <View style={styles.alarm}>
      {/*<ActiveButton 
          active={boolToInt(this.state.active)} 
        />

        <View style={styles.alarmTime}>
          <Text>{ this.state.time }</Text>
        </View>

        <LocationButton 
          active={boolToInt(this.state.localized)}
        />

        <ItineraryButton 
          active={boolToInt(this.state.itemized)} 
        />

        <DeleteButton 
          onPress={() => this.props.deleteFunc(this.props.id)} 
        />*/}
      </View>
        )
  }

}
