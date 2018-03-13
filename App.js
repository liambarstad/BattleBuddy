import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import MainTabs from './components/main-page/main-tabs'
import MainContent from './components/main-page/main-content'
import { appStyles, shared } from './styles'
const boolToInt = require('./helpers/gen-helper').boolToInt

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'alarms'
    }
  }

  switchTabs(active) {
    this.setState({ active })
  }

  render() {
    return (
      <View style={appStyles.mainApp}>
        <MainTabs 
          active={this.state.active}
          onPress={(active) => this.switchTabs(active)} 
        />
        <MainContent 
          active={this.state.active}
        />
      </View>
    )
  }
}

