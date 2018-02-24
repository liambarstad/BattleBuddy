const validateNewAlarm = (obj={}) => {
  if (!obj.hours || obj.hours > 24 || obj.hours < 0) { 
    throw { error: "Invalid hours" }
  }
  if (!obj.minutes || obj.minutes > 59 || obj.minutes < 0) {
    throw { error: "Invalid minutes" }
  }
  if (obj.status > 3 || obj.status < 0) {
    throw { error: "Invalid status" }
  }
  return obj
}

const getAlarmImage = (stat) => {
  return <Image source={require('../assets/alarmClock' + stat)} />
}

const formatTime = (hours, minutes) => {
  let dayHalf
  if (hours < 12) { 
    dayHalf = 'AM' 
  } else {
    dayHalf = 'PM'
  }
  let formatHours = (hours % 12).toString()
  let formatMinutes = minutes.toString()
  return formatHours + formatMinutes + dayHalf
}

const getLocationButton = (localized) => {
  return <Image source={require('../assets/alarmLocation' + localized.toString())} /> 
}

const getItineraryButton = (itemized) => {
  return <Image source={require('../assets/alarmItemized' + itemized.toString())} />
}

module.exports = { validateNewAlarm, getAlarmImage, formatTime, getLocationButton, getItineraryButton }
