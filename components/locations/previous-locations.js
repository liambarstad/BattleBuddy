import React, { Component } from 'react'
import { View, Text, Modal, Button, ScrollView } from 'react-native'
import { shared } from '../../styles'
const LocationModel = require('../../models/location-model')

export default class PreviousLocations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      locations: [],
    }
  }

  componentDidMount() {
    LocationModel.getAllPrevious(this.props.onPress)
      .then(locations => this.setState({ locations }))
  }

  locations() {
    if (this.state.locations.length > 0) {
      return this.state.locations
    } else {
      return (
        <Text>No Saved Locations</Text>
      )
    }
  }

  render() {
    return (
      <View>
        <Button
          title='Pick From Saved'
          onPress={() => this.setState({active:true})}
        />

        <Modal
          visible={this.state.active}
          animationType='slide'
          presentationType='fullScreen'
          onRequestClose={() => this.setState({active:false})}
        >
          <View style={shared.form}>
            <ScrollView>
              { this.locations() } 
            </ScrollView>
          </View>
        </Modal>
      </View>
    )
  }
}
