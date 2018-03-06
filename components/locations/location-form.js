import React, { Component } from 'react'
import { Modal, View, Button, Text, ScrollView, TextInput } from 'react-native'
import { MapView } from 'expo'
import { verifyLocation, getLocation } from '../../helpers/location-helper'
import { searchMaps } from '../../helpers/maps-helper'
import PreviousLocations from './previous-locations'
import { shared, locationStyles } from '../../styles'

export default class LocationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prev: this.props.prev || false,      
      pickingPrevious: false,
      pickedPrevious: false,
      search: '',
      id: this.props.id || null,
      name: this.props.name || '',
      longitude: this.props.longitude || 0.0,
      latitude: this.props.latitude || 0.0,
    }
  }

  componentDidMount() {
    this.initializeLocation()
      .then(loc => {
        this.setState({
          longitude: this.state.longitude || loc.coords.longitude,
          latitude: this.state.latitude || loc.coords.latitude,
        })
      })
  }

  async initializeLocation() {
    let granted = await verifyLocation()
    if (granted) {
      return await getLocation() 
    }
  }

  submitNew() {
    //for new entry
    //end with this.props.onSubmit()
  }

  prev() {
    if (this.state.prev) {
      return (
        <View>
          <Button
            title='Pick From Saved'
            onPress={() => this.setState({pickingPrevious:true})}
          />

          <Modal
            visible={this.state.pickingPrevious}
            animationType='slide'
            presentationType='fullScreen'
            onRequestClose={() => this.setState({pickingPrevious:false})}
          >
            <PreviousLocations 
              onPress={this.props.onSubmit}
            />
          </Modal>
        </View>
      )
    }
  }

  search() {
    searchMaps(this.state.search)  
      .then(results => {
        this.setState({
          longitude: results.longitude,
          latitude: results.latitude,
        })
      })
  }

  mapView() {
    return (
      <ScrollView>
        <View style={locationStyles.outerTextInput}>
          <TextInput
            style={locationStyles.textInput}
            placeholder={this.state.name || 'Search Location'}
            onChangeText={(search) => this.setState({ search })}
            onSubmitEditing={this.search}
            defaultValue={this.props.name}
          />
        </View>

        <View style={locationStyles.locationInput}>
          <MapView
            provider='google'
            region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0922,
            }}
          />
        </View>
      </ScrollView>
    )
  }

  render() {
    return (
      <View style={shared.form}>
        { this.prev() }
        <Button
          style={shared.createButton}
          title='Submit Location'
          onPress={this.submitNew}
        />
        <View style={locationStyles.mapView}>
          { this.mapView() }
        </View>
      </View>
    )
  }
}
