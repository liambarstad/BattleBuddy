import React, { Component } from 'react'
import { ScrollView, View, Button, Text } from 'react-native'
import OptionBox from '../shared/option-box'
import { shared } from '../../styles'

export default class ItineraryForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      title: this.props.title,
      time: this.props.time,
    }
  }

  render() {
    return (
      <View style={shared.form}>
        <ScrollView>
          <OptionBox
            name='Title'
            type='text'
            value={this.state.title}
            onSubmit={(title) => this.state.title}
          />
          <OptionBox
            name='Task Time'
            type='taskTime'
            value={this.state.time}
            onSubmit={(time) => this.setState({time})}
          />
        </ScrollView>

        <Button
          style={shared.createButton}
          onPress={this.submit}
          title='Add Itinerary Item'
        />
      </View>
    )
  }
}
