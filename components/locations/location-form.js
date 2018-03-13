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
      search: '',
      id: this.props.id || null,
      name: this.props.name || '',
      region: {},
      map: null,
      markers: [],
    }
  }

  previousLocationsModal() {
    if (this.state.prev) {
      return (
        <PreviousLocations 
          onPress={this.props.onSubmit}
        />
      )
    }
  }

  search() {
    searchMaps(this.state.search, this.state.region.latitude, this.state.region.longitude, this.markerPress)
      .then(makrers => this.setState({ markers }))
  }

  markerPress(name, latitude, longitude) {
    this.setState({
      name,
      search: name,
      markers: <MapView.Marker
          coordinates={{ latitude, longitude }}
          title={name} 
          image={require('../../assets/main/location-button-inactive.png')}
        />
    })
  }

  submit() {
    let data = {
      id: this.state.id,
      name: this.state.name,
      latitude: this.state.region.latitude,
      longitude: this.state.region.longitude,
    }
    this.props.onSubmit(data)
  }

  componentDidMount() {
    this.initializeLocation()
      .then(region => this.setState({ 
        region: {
          latitude: this.props.latitude || region.coords.latitude,
          longitude: this.props.longitude || region.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }
      }))
      .then(complete => {
        this.initializeMarker()
        this.setMap()
      })
  }

  async initializeLocation() {
    let granted = await verifyLocation()
    if (granted) {
      return await getLocation() 
    } else {
      //stuff
    }
  }

  initializeMarker() {
    this.setState({
      markers: <MapView.Marker
          coordinate={{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude,
          }}
          title={this.props.name}
        />
    })
  }

  setMap() {
    let map = (
      <MapView
        style={locationStyles.locationInput}
        initialRegion={this.state.region}
      >
        { this.state.markers }
      </MapView>
    )
    this.setState({ map })
  }

  mapView() {
    return (
      <View style={locationStyles.mapView}>
        <View style={locationStyles.outerTextInput}>
          <TextInput
            style={locationStyles.textInput}
            placeholder={this.state.name || 'Search Location'}
            onChangeText={(search) => this.setState({ search })}
            onSubmitEditing={() => this.search()}
            defaultValue={this.props.name}
          />
        </View>

        <View>
          { this.state.map }
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={shared.form}>
        { this.previousLocationsModal() }
        <Button
          style={shared.createButton}
          title='Submit Location'
          onPress={() => this.submit()}
        />
        { this.mapView() }
      </View>
    )
  }
}
