import React, { Component } from 'react'
import { Text, View, Button, ScrollView, Image } from 'react-native'
import { boolToInt } from '../../helpers/gen-helper' 
import { locationStyles, shared } from '../../styles'
import { validateNew } from '../../helpers/location-helper'
import CreateScreen from '../shared/create-screen'
import Location from './location'
const LocationModel = require('../../models/location-model')

export default class Locations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
      createScreen: false,
    }
  }

  componentDidMount() {
    LocationModel.getAll()
      .then(locations => this.setState({ locations }))
  }

  create(data) {
    let validated = validateNew(data)
    LocationModel.create(validated)
      .then(newLocation => {
        this.setState({locations: [newLocation, ...this.state.locations], createScreen: false})
      })
  }

  toggleCreateScreen = () => {
    let prevState = this.state.createScreen
    this.setState({createScreen:!prevState})
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
          resource='locations'
          onSubmit={(info) => this.create(info)}
        />

        <ScrollView style={shared.mainCard}>
          { this.state.locations }
        </ScrollView>

        <Button
          style={shared.createButton}
          onPress={this.toggleCreateScreen}
          title='+ Location'
        />
      </View>
    )
  }

}
