import React, { Component } from 'react'
import { Text, View, Button, Platform, DatePickerIOS } from 'react-native'
import { formatTime, stringToDate } from '../../helpers/time-helper'
import { shared } from '../../styles'

export default class Popout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.prepareValue()
    }
  }

  prepareValue() {
    if (this.props.type === 'time') {
      return this.props.value ?
        stringToDate(this.props.value) :
        new Date
    } else {
      return null
    }
  }

  content() {
    if (this.props.type === 'time') {
      return this.time()
    } else {
      return this.location() 
    }
  }

  time() {
    if (Platform.OS === 'ios') {
      return (
        <DatePickerIOS
          date={this.state.value}
          onDateChange={(value) => this.setState({value})} 
          mode='time'
        />
      )
    } else {
      return(
        <Text>Not yet implemented for android</Text>
      )
    }
  }

  location() {
              
  }

  submit = () => {
    if (this.props.type === 'time') {
      let value = formatTime(this.state.value)
      this.props.onSubmit(value)
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
