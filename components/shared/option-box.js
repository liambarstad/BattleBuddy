import React, { Component } from 'react'
import { Modal, View, Text, Slider, TouchableHighlight, } from 'react-native'
import Popout from './popout'
const formatTime = require('../../helpers/time-helper').formatTime
const styles = require('../../styles')

export default class OptionBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.prepareValue(),
      editing: false,
    }
  }

  componentWillUpdate() {
    {/*add to parent state*/}
  }

  prepareValue() {
    if (this.props.type === 'time') {
      return formatTime(this.props.value)
    } else {
      return this.props.time
    }
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
            time={this.state.value}
            onSubmit={(value) => this.setState({value:value,editing:false})}
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
          disabled={this.props.disabled} 
          onSlidingComplete={(val) => this.props.onSubmit(val)}
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
      <View>
        <View style={styles.optionLeft}>
          <Text>{ this.props.name }</Text> 
        </View>
        
        <View style={styles.optionRight}>
          { this.modal() }
          { this.getValue() }
        </View>
      </View>
    )
  }
}
