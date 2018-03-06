import { formatItineraryItem } from '../helpers/itinerary-item-helper'
const axios = require('react-native-axios')
axios.defaults.baseURL = 'https://battle-buddy-backend-v1.herokuapp.com/api/v1'

const getAll = async () => {
  const { data } = await axios.get('/itinerary_items')
  let items = []
  data.forEach(item => {
    items.push(formatItineraryItem(item))
  })
  return items
}

module.exports = { getAll, }
