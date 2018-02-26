import React, { Component } from 'react'
import { Text, View, Button, Platform, DatePickerIOS } from 'react-native'
import { formatTime, stringToDate } from '../../helpers/time-helper'
import { shared } from '../../styles'

export default class Popout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: this.prepareTime()
    }
  }

  prepareTime() {
    if (this.props.type === 'time') {
      return stringToDate(this.props.time)
    } else {

    }
  }

  content() {
    if (this.props.type === 'time') {
      return this.time()
    } else {
      
    }
  }

  time() {
    if (Platform.OS === 'ios') {
      return (
        <DatePickerIOS
          date={this.state.time}
          onDateChange={(time) => this.setState({time})} 
          mode='time'
        />
      )
    } else {
      return(
        <Text>You Fucked up son</Text>
      )
    }
  }

  submit = () => {
    if (this.props.type === 'time') {
      let time = formatTime(this.state.time)
      this.props.onSubmit(time)
    }
  }

  render() {
    return (
      <View>
        { this.content() }
        <Button
          title='Return'
          onPress={this.submit}
        />
      </View>
    )
  }
}
