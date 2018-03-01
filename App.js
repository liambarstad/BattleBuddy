import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { SQLite } from 'expo'
import MainTabs from './components/main-page/main-tabs'
import MainContent from './components/main-page/main-content'
import { appStyles, shared } from './styles'
const boolToInt = require('./helpers/gen-helper').boolToInt
//const db = require('./helpers/db')

export default class App extends Component {
  constructor(props) {
    super(props)
  }


  componentDidMount() {
    /*this.createAlarmsTable()
    this.createItineraryTable()
    this.createLocationsTable()*/
  }

  createAlarmsTable() {
    /*db.transaction(tr => {
      tr.executeSql('create table if not exists alarms (id integer primary key not null auto_increment, active bit, time varchar(8) not null, itemized bit, localized bit);')
    })*/
  }

  createItineraryTable() {
    /*db.transaction(tr => {
      tr.executeSql('create table if not exists itineraryitems (id integer primary key not null auto_increment, description text, time int, increment int);')
    })*/
  }

  createLocationsTable() {
    
  }

  switchTabs(active) {
    this.refs.content.setState({ active })
  }

  render() {
    return (
      <View style={appStyles.mainApp}>
        <MainTabs 
          active='alarms'
          changeFunc={(active) => this.switchTabs({active})} 
        />
        <View style={appStyles.mainContent}>
          <MainContent 
            ref='content'
            active='alarms'
          />
        </View>
      </View>
    )
  }
}

