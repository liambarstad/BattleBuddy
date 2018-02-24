import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Alarm from './alarm'
const AlarmRealm = require('../../models/alarms')
const styles = require('../../styles')

export default class Alarms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alarms: []
    }
  }

  componentDidMount() {
    AlarmRealm.get()
      .then(data => {
        data.map(alarm => {
          <Alarm 
            info={JSON.stringify(alarm)} 
            onClick={handleClick(event.target)}/>
        })
      })
      .then(alarms => this.setState({ alarms })) 
      .catch(err => this.setState({ alarms: <Error resource='alarms' />}))
  }

  render() {
    return (
      <ScrollView style={styles.mainCard}>
        { this.state.alarms }
      </ScrollView>
        )
  }
}
