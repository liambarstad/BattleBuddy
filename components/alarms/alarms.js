import React, { Component } from 'react'
import { Text, View, Button, ScrollView } from 'react-native'
import { SQLite } from 'expo'
import Alarm from './alarm'
import CreateScreen from '../shared/create-screen'
import { validateNew } from '../../helpers/alarm-helper'
import { boolToInt } from '../../helpers/gen-helper'
import { alarmStyles, shared } from '../../styles'
const db = require('../../helpers/db')

export default class Alarms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alarms: [],
      createScreen: false
    }
  }

  componentDidMount() {
    let alarms = this.getAll()
  }

  toggleCreateScreen = () => {
    let prevState = this.state.createScreen
    this.setState({createScreen:!prevState})
  }

  formatAlarms(arr) {
    return <Text>{JSON.stringify(this.state.alarms)}</Text>
  }

  render() {
    return (
      <View>
        <CreateScreen 
          active={boolToInt(this.state.createScreen)} 
          resource='alarms'
          onSubmit={(info) => this.create(info)}
        />
      
        <ScrollView style={alarmStyles.mainCard}>
          { this.formatAlarms() }
        </ScrollView>
      
        <Button
          style={shared.createButton}
          onPress={this.toggleCreateScreen} 
          title='+' 
        />
      </View>
        )
  }



  getAll() {
    db.transaction(tr => {
      tr.executeSql('select * from alarms order by active;',
        null,
        (_, { rows: { _array }}) => this.setState({_array, createScreen:false}),
        (_, alarms) => this.setState({alarms, createScreen:false})
      )
    })
  }

  create(info) {
    let validated = validateNew(info) 
    db.transaction(tr => {
      tr.executeSql('insert into alarms (active, time, itemized, localized) values (?, ?, ?, ?);',
        [validated.active, validated.time, validated.itemized, validated.localized],
        (_, { rows: { _array }}) => this.setState({ alarms: [_array, ...this.state.alarms], createScreen: false }),
        (query, alarms) => this.setState({alarms: query, createScreen:false })
      )
    })
  }

}
