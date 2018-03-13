import React, { Component } from 'react'
import { View, Text, Button, ScrollView, Image } from 'react-native'
import { shared } from '../../styles'
import { boolToInt } from '../../helpers/gen-helper'
import CreateScreen from '../shared/create-screen'
const ItineraryModel = require('../../models/itinerary-item-model')

export default class Itinerary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itinerary: []
    }
  }

  componentDidMount() {
    ItineraryModel.getAll()
      .then(itinerary => {
        this.setState({ itinerary })
      })
  }

  render() {
    return (
      <View>
        <Image
          source={require('../../assets/main/background1.png')}
          style={shared.backgroundImage1}
        />
        <CreateScreen
          active={boolToInt(this.state.createScreen)}
          resource='itinerary'
          onSubmit={(info) => this.create(info)}
        />

        <ScrollView style={shared.mainCard}>
          { this.state.itinerary }
        </ScrollView>
        
        <Button
          style={shared.createButton}
          onPress={this.toggleCreateScreen}
          title='+ Itinerary Item'
        />
      </View>
        )
  }

}
