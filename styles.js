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
    marginTop: '10%',
    flexDirection: 'row',
    backgroundColor: appOrange,
    width: '100%',
  },

  mainTab: {
    height: '100%',
  },

  tabOuterActive: {
    backgroundColor: appBlack,
    height: '100%',
    alignItems: 'center',
    margin: '50%',
    justifyContent: 'center',
  },

  tabOuterInactive: {
    backgroundColor: appOrange,
    height: '100%',
    alignItems: 'center',
    margin: '2%',
    justifyContent: 'center',
  },

  tabInnerActive: {
    backgroundColor: appOrange,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },

  tabInnerInactive: {
    backgroundColor: appBlack,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
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
