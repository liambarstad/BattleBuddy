import React, { Component } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import MainTab from './main-tab'
import { intToBool } from '../../../helpers/gen-helper'
import { mainTabStyles } from '../../../styles'

export default class ItineraryTab extends MainTab {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active === 'itinerary') {
      this.setState({ active: true })
    } else {
      this.setState({ active: false })
    }
  }

  componentDidMount() {
    let activeImage = <Image
        source={require('../../../assets/main/itinerary-button-inactive.png')}
        style={mainTabStyles.icon}
      />
    let inactiveImage = <Image
        source={require('../../../assets/main/itinerary-button-active.png')}
        style={mainTabStyles.icon}
      />
    this.setActive()
    this.setState({ activeImage, inactiveImage })
  }

  setActive() {
    if (this.state.active === 'itinerary') {
      this.setState({ active: true })
    } else {
      this.setState({ active: false })
    }
  }

  toggleActive() {
    if (!this.state.active) {
      this.setState({ active: true })
      this.props.onPress('itinerary')
    }
  }

}
