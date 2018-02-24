import { StyleSheet } from 'react-native'

const appOrange = '#ff744d'
const appBlack = 'black'

const styles = StyleSheet.create({

  mainTabs: {
    flex: 1,
    flexDirection: 'row',
  },

  tabOuterActive: {
    width: '30%',
    height: '20%',
    alignItems: 'center',
  },

  tabInnerActive: {
    width: '20%',
    height: '12.6%',
    textAlign: 'center',
  },

  tabTextActive: {
    color: 'black',
  },

  tabOuterInactive: {
    width: '30%',
    height: '20%',
    alignItems: 'center',
  },

  tabInnerInactive: {
    width: '20%',
    height: '12.6%',
    textAlign: 'center',
  },

  tabTextInactive: {
    color: appOrange,
  },

  mainContent: {
  },

  mainCard: {

  },

  alarm: {
    flex: 1,
    flexDirection: 'row',
    height: '15%',
  },

  alarmClock: {
    width: '10%',
  },

  alarmTime: {
    width: '60%',
  },

  alarmLocationButton: {
    width: '10%',
  },

  alarmItineraryButton: {
    width: '10%',
  },

  alarmDeleteButton: {
    width: '10%',
  },
            
})

module.exports = styles
