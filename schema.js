const ItineraryItemSchema = {
  name: 'ItineraryItem',
  properties: {
    title: 'string',
    time: 'int',
  }
}

const LocationSchema = {
  name: 'Location',
  properties: {
    streetNumber: 'int',
    street: 'string',
    city: 'string',
    state: 'string',
    zip: 'int',
  }
}

const AlarmSchema = {
  name: 'Alarm',
  primaryKey: 'id',
  properties: {
    id: 'int',
    hours: 'int',
    minutes: 'int',
    status: {type: 'int', default: 0},
    localized: 'bool',
    location: 'Location?',
    itemized: 'bool',
    items: 'ItineraryItem[]',
  }
}

export { AlarmSchema, ItineraryItemSchema, LocationSchema }
