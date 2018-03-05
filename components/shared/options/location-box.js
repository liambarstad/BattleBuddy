import React, { Component } from 'react'
import { Modal, Text, View, TouchableHighlight } from 'react-native'
import LocationForm from '../../locations/location-form'

export default class LocationBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id || null,
      name: this.props.name || null,
      longitude: this.props.longitude,
      latitude: this.props.latitude,
      editing: false,
    }
  }

  submit(id, name) {
    this.setState({ editing: false })
    this.props.onSubmit(id, name)
  }

  modal() {
    return (
      <Modal
        visible={this.state.editing}
        animationType='slide'
        presentationStyle='fullScreen'
        onRequestClose={() => this.setState({editing:false})}
      >
        <LocationForm 
          prev='true' 
          onSubmit={(id, name) => {
            this.setState({editing:false})
            this.props.onSubmit(id, name)
          }}
        />
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
