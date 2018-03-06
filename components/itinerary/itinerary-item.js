import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class ItineraryItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      time: this.props.time,
      timeUnit: this.props.timeUnit,
    }
  }

  render() {
    return (
      <View>
        <View>
          <Text>{this.state.name}</Text>
        </View>

        <View>
          <Text>{this.state.time}</Text>
          <Text>{this.state.timeUnit}</Text>
        </View>
      </View>
    )
  }
}
