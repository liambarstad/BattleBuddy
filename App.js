import React, { Component } from 'react'
import { View, Button } from 'react-native'
import { SQLite } from 'expo'
import CreateScreen from './components/main-page/create-screen'
import MainTabs from './components/main-page/main-tabs'
import MainContent from './components/main-page/main-content'
import { appStyles } from './styles'
const boolToInt = require('./helpers/gen-helper').boolToInt

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      active: "alarms",
      createScreen: false,
    }
  }

  toggleCreateScreen() {
    let prevState = this.state.createScreen
    this.setState({createScreen:!prevState})
  }

  componentDidMount() {
    SQLite.openDatabase('BattleBuddy.db')
  }

  render() {
    let active = this.state.active
    return (
      <View style={appStyles.mainApp}>
        <CreateScreen 
          active={boolToInt(this.state.createScreen)} 
          resource={active}
          onClose={() => this.toggleCreateScreen()}
          onSubmit={(info) => this.createAlarm(info)}
        />
        <MainTabs 
          active={active}
          changeFunc={(active) => this.setState({active})} 
        />
        <View style={appStyles.mainContent}>
          <MainContent name={active} />
        </View>
        <Button
          style={appStyles.createButton}
          onPress={() => this.toggleCreateScreen()} 
          title='+' 
        />
      </View>
    )
  }
}

