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
    backgroundColor: appBlack,
    boxShadow: 'rgba(255,255,255,0.3) 0em 0em 0.5em 0.5em inset',
    alignItems: 'center',
  },

  tabInnerActive: {
    width: '20%',
    height: '12.6%',
    backgroundColor: appOrange,
    boxShadow: 'rgba(0,0,0,0.3) 0em 0em 0.5em 0.5em inset',
    textAlign: 'center',
  },

  tabTextActive: {
    color: 'black',
  },

  tabOuterInactive: {
    width: '30%',
    height: '20%',
    backgroundColor: appOrange,
    boxShadow: 'rgba(0,0,0,0.3) 0em 0em 0.5em 0.5em inset',
    alignItems: 'center',
  },

  tabInnerInactive: {
    width: '20%',
    height: '12.6%',
    backgroundColor: appBlack,
    boxShadow: 'rgba(255,255,255,0.3) 0em 0em 0.5em 0.5em inset',
    textAlign: 'center',
  },

  tabTextInactive: {
    color: appOrange,
  },

  mainContent: {
    backgroundColor: appBlack,
  },

  mainCard: {
    backgoundColor: 'rgba(0,0,0,0)',

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
