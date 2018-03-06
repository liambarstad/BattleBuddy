import React, { Component } from 'react'
import { Image, View, TouchableHighlight } from 'react-native'
import { alarmStyles } from '../../../styles'
const intToBool = require('../../../helpers/gen-helper').intToBool

const getImage = (active) => {
  active ?
    <Image 
    /> :
    <Image 
    />
}

export default class ItineraryButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeImage: null,
      inactiveImage: null,
      active: intToBool(this.props.active)
    }
  }

  componentDidMount() {
    let activeImage = <Image
        source={require('../../../assets/main/itinerary-button-active.png')}
        style={alarmStyles.icon}
      />
    let inactiveImage = <Image
        source={require('../../../assets/main/itinerary-button-inactive.png')}
        style={alarmStyles.icon}
      />
    this.setState({ activeImage, inactiveImage })
  }

  icon() {
    if (this.state.active) {
      return this.state.activeImage
    } else {
      return this.state.inactiveImage
    }
  }

  toggle() {

  }

  render() {
    return (
      <TouchableHighlight
        style={alarmStyles.icon}
        onPress={this.toggle}
      >
      <View>
        { this.icon() }
      </View>
      </TouchableHighlight>
    )
  }
}
