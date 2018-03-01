import React, { Component } from 'react'
import { View } from 'react-native'
import { mainTabStyles } from '../../styles'
const boolToInt = require('../../helpers/gen-helper').boolToInt
const { default: MainTab } = require('./main-tab')



export default class MainTabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: this.props.active
    }
  }

  isActive(name) {
    return boolToInt(Boolean(this.state.active === name))
  }

  switchTabs(active) {
    this.setState({ active })
    this.props.changeFunc(active)
  }

  render() {
    return (
      <View style={mainTabStyles.mainTabs}>      
        <MainTab 
          name="alarms"  
          active={this.isActive("alarms")} 
          changeFunc={(active) => this.switchTabs(active)}
        />
        <MainTab 
          name="locations" 
          active={this.isActive("locations")}
          changeFunc={(active) => this.switchTabs(active)}
        />
        <MainTab 
          name="itinerary" 
          active={this.isActive("itinerary")}
          changeFunc={(active) => this.switchTabs(active)}
        />
      </View>
        )
  }
}
