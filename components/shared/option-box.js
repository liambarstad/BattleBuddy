import React, { Component } from 'react'
import { Modal, View, Text, Slider, TouchableHighlight, } from 'react-native'
import Popout from './popout'
import Expo from 'expo'
import { formatTime } from '../../helpers/time-helper'
import { shared } from '../../styles'

export default class OptionBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.prepareValue(this.props.value),
      editing: false,
    }
  }

  prepareValue(value) {
    if (this.props.type === 'time') {
      return formatTime(value)
    } else {
      return this.props.value
    }
  }

  submit(value) {
    this.setState({
      value: this.prepareValue(value),
      editing:false,
    })
    this.props.onSubmit(value)
  }
  
  modal() {
    if (this.props.popout === 'true' && this.props.disabled !== 'true') {
      return (
        <Modal
          visible={this.state.editing}
          className='updateValue'
          animationType='slide'
          presentationStyle='pageSheet'
          onRequestClose={() => this.setState({editing:false})}
        >
          <Popout 
            type={this.props.type} 
            value={this.props.value}
            onSubmit={(value) => this.submit(value)}
          />
        </Modal>
      )
    }
  }

  popout() {
    if (this.props.popout === 'true') {
      this.setState({editing:true})
    }
  }

  getValue() {
    if (this.props.type === 'slider') {
      return (
        <Slider
          value={this.value}
          minimumValue={0}
          maximumValue={1}
          disabled={this.props.disabled} 
          onValueChange={(val) => this.submit(val)}
        />
      )
    } else {
      return (
        <TouchableHighlight
          className='timeInput'
          onPress={() => this.popout()}
        >
          <Text>{this.state.value}</Text>
        </TouchableHighlight>
      )
    }
  }

  render() {
    return (
      <View style={shared.option}>
        <View style={shared.optionLeft}>
          <Text>{ this.props.name }</Text> 
        </View>
        
        <View style={shared.optionRight}>
          { this.modal() }
          { this.getValue() }
        </View>
      </View>
    )
  }
}
