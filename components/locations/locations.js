import React, { Component } from 'react'
import { Text, View, Button, ScrollView } from 'react-native'
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

  create(info) {
    let validated = validateNew(info)
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
        <CreateScreen
          active={boolToInt(this.state.createScreen)}
          resource='locations'
          onSubmit={(info) => this.create(info)}
        />

        <ScrollView>
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
