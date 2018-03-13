import React, { Component } from 'react'
import { Text, View, Button, ScrollView, Image } from 'react-native'
import Alarm from './alarm'
import CreateScreen from '../shared/create-screen'
import { validateNew } from '../../helpers/alarm-helper'
import { boolToInt } from '../../helpers/gen-helper'
import { alarmStyles, shared } from '../../styles'
const AlarmModel = require('../../models/alarm-model')

export default class Alarms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alarms: [],
      createScreen: false
    }
  }

  componentDidMount() {
    AlarmModel.getAll()
      .then(alarms => this.setState({ alarms }))
  }

  create(info) {
    let validated = validateNew(info) 
    AlarmModel.create(validated)
      .then(newAlarm => {
        this.setState({alarms: [newAlarm, ...this.state.alarms], createScreen: false})
      })
  }

  toggleCreateScreen = () => {
    let prevState = this.state.createScreen
    this.setState({createScreen:!prevState})
  }

  render() {
    return (
      <View>
        <Image
          source={require('../../assets/main/background1.png')}
          style={shared.backgroundImage1}
        />
        <CreateScreen 
          active={boolToInt(this.state.createScreen)} 
          resource='alarms'
          onSubmit={(info) => this.create(info)}
        />
      
        <ScrollView style={shared.mainCard}>
          { this.state.alarms }
        </ScrollView>
      
        <Button
          style={shared.createButton}
          onPress={this.toggleCreateScreen} 
          title='+ Alarm' 
        />
      </View>
        )
  }


}
