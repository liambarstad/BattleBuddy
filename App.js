import React, { Component } from 'react'
import { View, Button } from 'react-native'
import CreateScreen from './components/main-page/create-screen'
import MainTabs from './components/main-page/main-tabs'
import MainContent from './components/main-page/main-content'
const boolToInt = require('./helpers/gen-helper').boolToInt
const styles = require('./styles')

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

  render() {
    let active = this.state.active
    return (
      <View>
        <CreateScreen 
          active={boolToInt(this.state.createScreen)} 
          resource={active}
          onClose={() => this.toggleCreateScreen()}
          onSubmit={(info) => this.createAlarm(info)}
        />
        <View style={styles.mainTabs}>
          <MainTabs 
            active={active}
            changeFunc={(active) => this.setState({active})} 
          />
        </View>
        <View style={styles.mainContent}>
          <MainContent name={active} />
        </View>
        <Button
          style={styles.createButton}
          onPress={() => this.toggleCreateScreen()} 
          title='+' 
        />
      </View>
    )
  }
}

