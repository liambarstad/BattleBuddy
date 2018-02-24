import { ItineraryItemSchema } from '../schema'
const Realm = require('realm')

const get = async (obj={}) => {
  try {
    const itineraryItems = await Realm.open({schema: [ItineraryItemSchema]})
    return itineraryItems.objects('ItineraryItem')
  } catch (e) {
    return e
  }
}

const create = async (obj={}) {
  try {
    const itineraryItems = await Realm.open({schema: [ItineraryItemSchema]})
    const iiInfo = validateNewItineraryItem(obj)
    return itineraryItems.create({ iiInfo })
  } catch (e) {
    return e
  }
}

module.exports = { get, create }
