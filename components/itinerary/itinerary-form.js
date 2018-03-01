import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'

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
      <View>
        <ScrollView>
          <OptionBox
            name='Title'
            type='text'
            popout='true'
            value={this.state.title}
            onSubmit={(title) => this.state.title}
          />
          <OptionBox
            name='Task Time'
            type='task-time'
            popout='true'
            value={this.state.time}
            onSubmit={(time) => this.setState({time})}
          />
        </ScrollView>

        <Button
          style={itineraryStyles.formSubmit}
          onPress={this.submit}
          title='Add Itinerary Item'
        />
      </View>
    )
  }
}
