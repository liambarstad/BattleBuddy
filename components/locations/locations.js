import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'

export default class Locations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: []
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <ScrollView>
        <Text>Fack You</Text>
      </ScrollView>
    )
  }

}
