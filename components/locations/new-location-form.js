import React, { Component } from 'react'
import { Modal } from 'react-native'
import { Constants, Location, Permissions } from 'expo'

export default class LocationInterface extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: this.props.visible,
      newLocation: this.props.newLocation || false,
      startingPoint: {},
      endingPoing: this.props.location || null
    }
  }

  componentWillMount() {

  }


  render() {
    return (
      <Modal
        visible={this.state.visible}
        presentationType='fullScreen'
      >
      {/*make API call*/}      
      </Modal>
    )
  }
}
