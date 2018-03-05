import React, { Component } from 'react'
import { View, Slider, Button, ScrollView, Text } from 'react-native'
import OptionBox from '../shared/option-box'
import { alarmStyles, shared } from '../../styles'
const boolToInt = require('../../helpers/gen-helper').boolToInt

export default class AlarmForm extends Component {
  constructor(props) {
    super(props)
    let info
    this.props.info ?
      info = JSON.parse(this.props.info) :
      info = {
        location: {}, 
      }
    this.state = {
      editing: false,
      info: {
        time: info.time,
        locationId: info.location.id,
        locationName: info.location.name,
        itemized: info.itemized,
      }
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
            value={this.state.info.time}
            onSubmit={(time) => this.setState({info:{time:time}})}
          />
          <OptionBox
            name='Location'
            type='location'
            id={this.state.info.locationId}
            value={this.state.info.locationName}
            onSubmit={(id, name) => this.setState({
              editing: false,
              info:{
                locationId: id,
                locationName: name
              },
            })}
          />
          <OptionBox
            name='Sync Itinerary'
            type='slider'
            value={boolToInt(this.state.info.itemized)}
            onSubmit={(val) => this.setState({info:{itemized:val}})}
          />
          <OptionBox
            name='Repeat'
            type='dropdown'
            value='Never'
          />
          <OptionBox
            name='Wakeup'
            type='dropdown'
            value='Default'
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
