import React, { Component } from 'react'
import { getAlarmImage, getLocationButton, getItineraryButton } from '../../helpers/alarm-helper'
import { Text, View, Image, TouchableHighlight } from 'react-native'
const styles = require('../../styles') 

export default class Alarm extends Component {
  constructor(props) {
    super(props)
    let info = this.props.info.json()
    this.state = {
      alarmClock: getAlarmImage(info.status),
      time: formatTime(info.hours, info.minutes),
      locationButton: getLocationButton(info.localized),
      itineraryButton: getItineraryButton(info.itemized),
    }
  }

  render() {
    return (
      <View style={styles.alarm}>
        <TouchableHighlight
          onPress={toggleActive} >
            <Image
              style={styles.alarmClock}
              source={require('../assets/alarm-clock')}
            />
        </TouchableHighlight>

        <View style={styles.alarmTime}>
          <Text>{ this.state.time }</Text>
        </View>
        <View style={styles.alarmLocationButton}>
          { this.state.locationButton }
        </View>
        <View style={styles.alarmItineraryButton}>
          { this.state.itineraryButton }
        </View>
        <View style={styles.alarmDeleteButton}>
          <Image source={require('../assets/alarmDeleteButton')} />
        </View>
      </View>
        )
  }

}
