import React, { Component } from 'react'
import { Text } from 'react-native'

export default class Itinerary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itinerary: []
    }
  }

  componentDidMount() {
    ItineraryRealm.get()
      .then(data => {
        data.map(item => {
          <ItineraryItem
            info={JSON.stringify(item)}
            onClick=handleClick(event.target)} />
        })
      })
      .then(itinerary => {
        this.setState({ itinerary })
      })
      .catch(err => this.setState({ itinerary: <Error resource='itinerary'/>)
  }

  render() {
    return (
      <ScrollView>
        { this.state.itinerary }
      </ScrollView>
        )
  }
}
