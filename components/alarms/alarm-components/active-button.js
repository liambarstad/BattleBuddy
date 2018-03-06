import React, { Component } from 'react'
import { Image, View, TouchableHighlight } from 'react-native'
import { intToBool } from '../../../helpers/gen-helper'
import { alarmStyles } from '../../../styles'
const AlarmModel = require('../../../models/alarm-model')

export default class ActiveButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeImage: null,
      inactiveImage: null,
      active: intToBool(this.props.active)
    }
  }

  componentDidMount() {
    let activeImage = <Image
        source={require('../../../assets/main/clock-active.png')} 
        style={alarmStyles.icon}
      />
    let inactiveImage = <Image
        source={require('../../../assets/main/clock-inactive.png')}
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

  toggle = async () => {
    let active = !this.state.active 
    this.setState({ active })
    let result = await AlarmModel.toggleActive(this.props.id, active)
    !result ?
      this.setState({ active: !this.state.active }) :
      null
  }

  render() {
    return (
      <TouchableHighlight
        style={alarmStyles.icon}
        onPress={() => this.toggle()}
      >
        <View>
          { this.icon() }
        </View>
      </TouchableHighlight>
    )
  }
}
