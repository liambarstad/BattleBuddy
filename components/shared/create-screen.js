import React, { Component } from 'react'
import { Modal } from 'react-native'
import AlarmForm from '../alarms/alarm-form'
import ItineraryForm from '../itinerary/itinerary-form'
import NewLocationForm from '../locations/new-location-form'
const intToBool = require('../../helpers/gen-helper').intToBool

export default CreateScreen = (props) => {
  return (
      <Modal
        visible={intToBool(props.active)}
        animationType={'slide'}
        onRequestClose={props.onClose}
        presentationStyle={'fullScreen'}
        onDismiss={props.onClose}
      >
      { renderForm(props.resource, props.onSubmit) }
      </Modal>
    )
}

renderForm = (resource, callback) => {
  if (resource === "alarms") {
    return <AlarmForm submit={callback} />
  } else if (resource = "itinerary") {
    return <ItineraryForm submit={callback} />
  } else {
    return <NewLocationForm submit={callback} />
  }
}
