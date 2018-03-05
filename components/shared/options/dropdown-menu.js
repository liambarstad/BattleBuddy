import React, { Component } from 'react'
import { Text, TouchableHighlight } from 'react-native'

export default class DropdownMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value,
      editing: false,
    }
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.submit}
      >
        <Text>{this.state.value}</Text>
      </TouchableHighlight>
    )
  }
}
