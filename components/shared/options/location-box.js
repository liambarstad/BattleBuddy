import React, { Component } from 'react'
import { Modal, Text, View, TouchableHighlight } from 'react-native'

export default class LocationBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      longitude: this.props.longitude,
      latitude: this.props.latitude,
      editing: false,
    }
  }

  submit() {
    this.setState({ editing: false })
    this.props.onSubmit(this.state.value)
  }

  modal() {
    return (
      <Modal
        visible={this.state.editing}
        animationType='slide'
        presentationStyle='fullScreen'
        onRequestClose={() => this.setState({editing:false})}
      >
        <Text>FackYou</Text>
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
          <Text>{this.state.name}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
