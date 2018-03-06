import React, { Component } from 'react'
import { Image, View, Modal, TouchableHighlight } from 'react-native'
import { alarmStyles } from '../../../styles'
import { intToBool } from '../../../helpers/gen-helper'
import LocationForm from '../../locations/location-form'
const AlarmModel = require('../../../models/alarm-model')

export default class LocationButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeImage: null,
      inactiveImage: null,
      active: intToBool(this.props.active),
      editing: false,
    }
  }

  componentDidMount() {
    let activeImage = <Image
        source={require('../../../assets/main/location-button-active.png')} 
        style={alarmStyles.icon}
      />
    let inactiveImage = <Image
        source={require('../../../assets/main/location-button-inactive.png')} 
        style={alarmStyles.icon} 
      />
    this.setState({ activeImage, inactiveImage })
  }

  icon() {
    if (this.state.active) {
      return this.state.activeImage
    } else {
      return this.state.inactiveImage
    }
  }

  locationForm() {
    return (
      <Modal
        visible={this.state.editing}
        animationType='slide'
        presentationType='fullScreen'
        onRequestClose={() => this.setState({editing:false})}
      >
        <LocationForm 
          onSubmit={(locationId) => this.setLocation(locationId)} 
        />
      </Modal>
    )
  }

  setLocation = async (locationId) => {
    //some bullshit
    this.setState({ active: true, editing: false })
    let result = await AlarmModel.localize(this.props.id, locationId) 
    !result ?
      this.setState({ active: false }) :
      null
  }

  render() {
    return (
      <TouchableHighlight
        style={alarmStyles.icon}
        onPress={() => this.setState({ editing: true })}
      >
        <View>
          { this.locationForm() }
          { this.icon() }
        </View>
      </TouchableHighlight>
    )
  }
}
