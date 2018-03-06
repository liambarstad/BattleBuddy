import React, { Component } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import { intToBool } from '../../../helpers/gen-helper'
import { mainTabStyles } from '../../../styles'

export default class MainTab extends Component {
  constructor(props) {
    super(props)
    this.activeStyle = mainTabStyles.tabActive
    this.inactiveStyle = mainTabStyles.tabInactive
    this.state = {
      activeImage: null,
      inactiveImage: null,
      active: this.props.active,
    }
  }

  image() {
    if (this.state.active) {
      return this.state.activeImage
    } else {
      return this.state.inactiveImage
    }
  }

  styleTab() {
    if (this.state.active) {
      return this.activeStyle
    } else {
      return this.inactiveStyle
    }
  }

  render() {
    return (
      <TouchableHighlight
        style={this.styleTab()}
        onPress={() => this.toggleActive()}
      >
        <View>
          { this.image() }
        </View>
      </TouchableHighlight>
    )
  }
}
