import { StyleSheet } from 'react-native'

const appOrange = '#ff744d'
const appBlack = 'black'

const appStyles = StyleSheet.create({
  mainApp: {
    height: '100%',
    backgroundColor: appBlack,
  },

  mainContent: {
    height: '60%',
    backgroundColor: 'white',
  },

})

const mainTabStyles = StyleSheet.create({
  mainTabs: {
    height: '15%',
    marginTop: '10%',
    flexDirection: 'row',
    backgroundColor: 'red',
    width: '100%',
  },

  mainTab: {
    flex: 1,
    height: '100%',
    margin: '2%',
  },

  tabOuterActive: {
    backgroundColor: appBlack,
    alignItems: 'center',
  },

  tabOuterInactive: {
    backgroundColor: appOrange,
    alignItems: 'center',
  },

  tabInnerActive: {
    backgroundColor: appOrange,
    height: '100%',
    width: '100%',
  },

  tabInnerInactive: {
    backgroundColor: appBlack,
    height: '100%',
    width: '100%',
  },

  tabTextActive: {
    color: appBlack,
  },

  tabTextInactive: {
    color: appOrange,
  },
})

const alarmStyles = StyleSheet.create({
  mainCard: {
    margin: '2%',
  },

  alarm: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 10,
  },

  icon: {
    width: '100%',
    height: '100%',
  },

  alarmTime: {
    fontSize: 30, 
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

  pry: {
    color: 'white'
  },
})

module.exports = { appStyles, mainTabStyles, alarmStyles, shared }
