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

const alarmStyles = StyleSheet.create({
  mainCard: {
    margin: '2%',
  },

  alarm: {
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
    margin: '10%',
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

})

module.exports = { appStyles, mainTabStyles, alarmStyles, shared }
