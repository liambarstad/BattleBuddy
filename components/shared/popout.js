import React, { Component } from 'react'
import { View, Button, Picker } from 'react-native'
import { Platform } from 'expo'
import { formatTime } from '../helpers/time-helper'
const styles = require('../styles')

export default class Popout extends Component {
  constructor(props) {
    super(props)
    let time = formatTime(this.props.time)
    this.state = {
      hours: time.slice(0, 1), 
      minutes: time.slice(3, 4),
      timeOfDay: time.slice(5, 6),
    }
    console.log(this.state)
  }

  content() {
    let type = this.props.type
    if (type === 'time') {
      return this.time()
    } else {
      
    }
  }

  time() {
    return (
      <View style={styles.pickerAndroid}>
        <Picker 
          selectedValue={this.state.hours}
          onValueChange={(value, ind) => this.setState({hours:value})}
        >
          { this.hoursOptions() }
        </Picker>

        <Picker
          selectedValue={this.state.minutes}
          onValueChange={(value, ind) => this.setState({minutes:value})}
        >
          { this.minutesOptions() }
        </Picker>

        <Picker
          selectedValue={this.state.timeOfDay}
          onValueChange={(value, ind) => this.setState({timeOfDay:value})}
        >
          { this.timeOfDayOptions() }
        </Picker>
      </View>
    )
  }

  hoursOptions() {
    let options = []
    for (i=1; i < 13; i++) {
      options.push(
        <Picker.Item value={i} />
      )
    }
    return options
  }

  minutesOptions() {
    let options = []
    for (i=0; i < 60; i++) {
      options.push(
        <Picker.Item value={i} />
      )
    }
    return options
  }

  timeOfDayOptions() {
    return [
      <Picker.Item value='AM' />,
      <Picker.Item value='PM' />
    ]
  }

  render() {
    return (
      <View>
        { this.content() }
        <Button
          title='Return'
          onPress={() => this.props.onSubmit()}
        />
      </View>
    )
  }
}
