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
      pickedPrevious: this.props.pickedPrevious || false,
      search: '',
      id: this.props.id || null,
      name: this.props.name || '',
      region: {},
      map: null,
    }
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
        let map = <MapView
            style={locationStyles.locationInput}
            region={this.state.region}
            onRegionChange={this.changeRegion}
          />
        this.setState({ map })
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

  submitNew() {
    //for new entry
    //end with this.props.onSubmit()
  }

  prev() {
    if (this.state.prev) {
      return (
        <PreviousLocations 
          onPress={this.props.onSubmit}
        />
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
      <View style={locationStyles.mapView}>
        <View style={locationStyles.outerTextInput}>
          <TextInput
            style={locationStyles.textInput}
            placeholder={this.state.name || 'Search Location'}
            onChangeText={(search) => this.setState({ search })}
            onSubmitEditing={this.search}
            defaultValue={this.props.name}
          />
        </View>

        { this.state.map }
      </View>
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
        { this.mapView() }
      </View>
    )
  }
}
