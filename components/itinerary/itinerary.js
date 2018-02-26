import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import { SQLite } from 'expo'

const db = SQLite.openDatabase('BattleBuddy.db')

export default class Itinerary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itinerary: []
    }
  }

  componentDidMount() {
    Itinerary.createItineraryTable()
    let itinerary = Itinerary.getAll()
    this.setState({ itinerary })
  }

  render() {
    return (
      <ScrollView>
        { this.state.itinerary }
      </ScrollView>
        )
  }

  static _formatItinerary(arr) {
    return arr.map(itineraryItem => {
      <Text>{itineraryItem}</Text>
    })
  }

  static getAll() {
    return db.transaction(tr => {
      tr.executeSql('select * from itineraryitems;',
      null,
      (_, { rows: { _array }}) => Itinerary._formatItinerary(_array))
    })
  }
}
