import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { SQLite } from 'expo'
import Alarm from './alarm'
import { validateNew } from '../../helpers/alarm-helper'
import { alarmStyles } from '../../styles'

const db = SQLite.openDatabase('BattleBuddy.db')

export default class Alarms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alarms: []
    }
  }

  componentDidMount() {
    Alarms.createAlarmsTable()
    let alarms = Alarms.getAll()
    this.setState({ alarms })
  }

  render() {
    return (
      <ScrollView style={alarmStyles.mainCard}>
        { this.state.alarms }
      </ScrollView>
        )
  }

  static _formatAlarms(arr) {
    return arr.map(alarm => {
      console.log(alarm)
    })
  }

  static createAlarmsTable() {
    db.transaction(tr => {
      tr.executeSql('create table if not exists alarms (id primary key not null, active bit, time varchar(20), itemized bit, localized bit);')
    })
  }

  static getAll() {
    return db.transaction(tr => {
      tr.executeSql('select * from alarms;',
        null,
        (_, { rows: { _array }}) => Alarms._formatAlarms(_array))
    })
  }

  static create(info) {
    if (validateNew(info)) {
      return db.transaction(tr => {
        tr.executeSql('insert into alarms (active, time, itemized, localized) values (?, ?, ?, ?,);',
        [info.active, info.time, info.itemized, info.localized],
        (_, { rows: { _array }}) => Alarms._formatAlarms(_array))
      })
    }
  }

}
