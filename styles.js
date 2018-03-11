import { StyleSheet } from 'react-native'

const appOrange = '#ff744d'
const appBlack = '#292929'

const appStyles = StyleSheet.create({
  mainApp: {
    height: '100%',
    backgroundColor: appBlack,
  },

  mainContent: {
    height: '60%',
    backgroundColor: appBlack,
  },

})

const mainTabStyles = StyleSheet.create({
  mainTabs: {
    height: '15%',
    width: '100%',
    marginTop: '10%',
    flexDirection: 'row',
  },

  tabActive: {
    height: '100%',
    width: '33%',
    backgroundColor: appOrange,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabInactive: {
    height: '100%',
    width: '33%',
    backgroundColor: appBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    height: 70,
    width: 70,
  }

})

const mainListing = StyleSheet.create({
  component: {
    flex: 1,
    flexDirection: 'row',
    maxWidth: '100%',
    margin: '2%',
    height: 100,
    backgroundColor: appBlack,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

})

const alarmStyles = StyleSheet.create({
  mainCard: {
    margin: '2%',
  },

  icon: {
    width: 40,
    height: 40,
  },

  alarmClock: {
    borderStyle: 'solid',
  },

  alarmTime: {
    fontSize: 30, 
    color: appOrange,
  },

})          

const shared = StyleSheet.create({
  form: {
    marginTop: '10%',
    marginRight: '2%',
    marginLeft: '2%',
  },

  option: {
    flex: 1,
    flexDirection: 'row',
  },

  optionLeft: {
    width: '60%',
    height: 60,
  },

  optionRight: {
    width: '40%',
    height: 60,
  },

  pickers: {
    flex: 1,
    flexDirection: 'row',
  },

  createButton: {
    backgroundColor: 'blue',
  },

  flex1: {
    flex: 1,
  },

})

const locationStyles = StyleSheet.create({
  title: {
    color: appOrange,
    fontSize: 25,
  },

  editButton: {
    height: 30,
    width: 30,
  },

  mapView: {
    height: 1000,
  },

  outerTextInput: {
    width: '100%',
    height: 60,
    marginRight: '5%',
    marginLeft: '5%',
    backgroundColor: 'blue',
    justifyContent: 'center',
  },

  textInput: {
    width: '100%',
    paddingRight: '5%',
    paddingLeft: '5%',
    backgroundColor: 'lightblue',
    fontSize: 30,
  },

  locationInput: {
    height: '100%',
    margin: '2%',
  }
})

const previousListing = StyleSheet.create({
  component: {
    flex: 1,
    flexDirection: 'row',
    maxWidth: '100%',
    margin: '2%',
    height: 70,
    backgroundColor: appBlack,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: { 
    fontSize: 15,
    color: appOrange,
  },
})

module.exports = { appStyles, mainTabStyles, mainListing, previousListing, alarmStyles, locationStyles, shared }
