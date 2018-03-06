import React, { Component } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import MainTab from './main-tab'
import { intToBool } from '../../../helpers/gen-helper'
import { mainTabStyles } from '../../../styles'

export default class AlarmTab extends MainTab {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let activeImage = <Image 
        source={require('../../../assets/main/clock-inactive.png')} 
        style={mainTabStyles.icon}
      />
    let inactiveImage = <Image 
        source={require('../../../assets/main/clock-active.png')} 
        style={mainTabStyles.icon}
      />
    this.setActive()
    this.setState({ activeImage, inactiveImage })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active === 'alarms') {
      this.setState({ active: true })
    } else { 
      this.setState({ active: false })
    }
  }

  setActive() {
    if (this.state.active === 'alarms') {
      this.setState({ active: true })
    } else {
      this.setState({ active: false })
    }
  }

  toggleActive() {
    if (!this.state.active) {
      this.setState({ active: true })
      this.props.onPress('alarms')
    }
  }

}
