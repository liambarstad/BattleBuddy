import { MapView } from 'expo'
//const key = 
const axios = require('react-native-axios')
axios.defaults.baseURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/'

const searchMaps = async (search, latitude, longitude, onSelect) => {
  const { data } = await axios.get('/nearbysearch', {
    key: 'AIzaSyBc1V99UfHf41UcDS-WUbSJtwUmU0o6-sc',
    location: `${latitude},${longitude}`,
    rankby: 'distance',
  })
  let results = []
  data.forEach(location => {
    results.push(
      <MapView.Marker
        coordinates={{
          latitude: location.geometry.location.lat,
          longitude: location.geometry.location.lng
        }}
        title={location.name}
        image={location.icon}
        onSelect={onSelect} 
      />
    )
  })
  return results
}

module.exports = { searchMaps }
