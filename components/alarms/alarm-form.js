import React, { Component } from 'react'
import { View, Slider, Button, ScrollView, Text } from 'react-native'
import OptionBox from '../shared/option-box'
const styles = require('../../styles')

export default class AlarmForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
    }
    this.props.info ?
      this.state.info = this.props.info.json() :
      this.state.info = {}
  }
  
  itemize = () => {
    this.state['itemized'] ?
      this.setState({info:{itemized:false}}) :
      this.setState({info:{itemized:true}})
  }

  _boolToStr(bool) {
    bool ? "1" : "0"
  }

  render() {
    let info = this.state.info
    return (
      <View>
      <ScrollView>
        <OptionBox
          name='Time'
          type='time'
          popout='true'
          value={info.time}
          onSubmit={(time) => this.setState({info:{time:time}})}
        />
        <OptionBox
          name='Location'
          type='location'
          popout='true'
          disabled='true'
          value={info.location}
        />
        <OptionBox
          name='Itinerary'
          type='slider'
          value={this._boolToStr(info.itemized)}
          onSubmit={(val) => this.itemize(val)}
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
        style={styles.formSubmit}
        onPress={(info) => this.props.submit(info)}
        title='Add Alarm'
      />
      </View>
    )
  }
}
