import React, { Component } from 'react'
import { Text } from 'react-native'

export default class Locations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: []
    }
  }

  componentDidMount() {
    Locations.createLocationsTable()
    let locations = Locations.getAll()
    this.setState({locations})
  }

  render() {
    return (
      <ScrollView>
        { this.state.locations }
      </ScrollView>
        )
  }

  static _formatLocations(arr) {
    return arr.map(locat => {
      <Text>{locat}</Text>
    })
  }

  static getAll() {
    return []
  }

}
