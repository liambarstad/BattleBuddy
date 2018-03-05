import React, { Component } from 'react'
import { Modal, View, Text, Slider, TouchableHighlight, } from 'react-native'
import TimeBox from './options/time-box'
import LocationBox from './options/location-box'
import DropdownMenu from './options/dropdown-menu'
import { shared } from '../../styles'

export default class OptionBox extends Component {
    constructor(props) {
      super(props)
    }

    renderValue() {
      switch(this.props.type) {
        case 'time':
          return (
            <TimeBox 
              value={this.props.value} 
              onSubmit={this.props.onSubmit}
            />
          )
          break
        case 'location':
          return (
            <LocationBox 
              id={this.props.id}
              name={this.props.value}
              onSubmit={this.props.onSubmit}
            />
          )
          break
        case 'slider':
          return (
            <Slider
              value={parseInt(this.props.value)}
              minimumValue={0}
              maximumValue={1}
              onValueChange={(val) => this.props.onSubmit(val)}
            />
          )
          break
        case 'dropdown':
          return (
            <DropdownMenu 
              value={this.props.value}
              onSubmit={this.props.onSubmit}
            />
          )
          break
        default:
          return (
            <Text style={shared.disabledText}>{ this.props.value }</Text>
          )
          break
      }
    }

    render() {
      return (
        <View style={shared.option}>
          <View style={shared.optionLeft}>
            <Text>{ this.props.name }</Text>
          </View>

          <View style={shared.optionRight}>
            { this.renderValue() }
          </View>
        </View>
      )
    }
}
