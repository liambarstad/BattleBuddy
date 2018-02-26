import React, { Component } from 'react'
import { View, Slider, Button, ScrollView, Text } from 'react-native'
import OptionBox from '../shared/option-box'
import { alarmStyles, shared } from '../../styles'
const boolToInt = require('../../helpers/gen-helper').boolToInt

export default class AlarmForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
    }
    if (this.props.info) {
      this.state.info = JSON.parse(this.props.info)
      this.state.location = Locations.findByAlarm(this.state.info.id)
    } else {
      this.state.info = {}
    }
  }
  
  submit = () => {
    this.props.submit(this.state.info)
    this.setState({ info: {} })
  }

  render() {
    return (
      <View style={shared.form}>
        <ScrollView>
          <OptionBox
            name='Time'
            type='time'
            popout='true'
            value={this.state.info.time}
            onSubmit={(time) => this.setState({info:{time:time}})}
          />
          <OptionBox
            name='Location'
            type='location'
            popout='true'
            value={this.state.location}
          />
          <OptionBox
            name='Itinerary'
            type='slider'
            value={boolToInt(this.state.info.itemized)}
            onSubmit={(val) => this.setState({info:{itemized:val}})}
          />
          <OptionBox
            name='Repeat'
            type='dropdown'
            popout='true'
            value='Never'
            disabled='true'
          />
          <OptionBox
            name='Wakeup'
            type='dropdown'
            popout='true'
            value='Default'
            disabled='true'
          />
        </ScrollView>

        <Button
          style={alarmStyles.formSubmit}
          onPress={this.submit}
          title='Add Alarm'
        />
      </View>
    )
  }
}
