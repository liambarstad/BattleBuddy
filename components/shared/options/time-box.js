import React, { Component } from 'react'
import { Modal, Text, View, Button, TouchableHighlight, DatePickerIOS, Platform } from 'react-native'
import { formatTime, stringToDate } from '../../../helpers/time-helper'
import { shared } from '../../../styles'

export default class TimeBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: formatTime(this.props.value),
      editing: false,
    }
  }

  submit() {
    this.setState({ editing: false })
    this.props.onSubmit(this.state.value)
  }

  timePicker() {
    if (Platform.OS === 'ios') {
      return (
        <View>
          <DatePickerIOS
            date={stringToDate(this.state.value)}
            onDateChange={(value) => this.setState({value:formatTime(value)})}
            mode='time'
          />
          <Button
            title='Return'
            onPress={() => this.submit()}
          />
        </View>
      )
    } else {
      return (
        <Text>Not yet implemented</Text>
      )
    }
  }

  modal() {
    return (
      <Modal
        visible={this.state.editing}
        animationType='slide'
        presentationStyle='fullScreen'
        onRequestClose={() => this.setState({editing:false})}
      >
        { this.timePicker() } 
      </Modal>
    )
  }

  render() {
    return (
      <View>
        { this.modal() }
        <TouchableHighlight
          onPress={() => this.setState({editing:true})}
        >
          <Text>{this.state.value}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
