const formatTime = (time) => {
  if (typeof time === 'object') {
    return format(time)
  } else if (typeof time === 'string') {
    return time
  } else {
    return format(new Date)
  }
}

const stringToDate = (str) => {
  let hours = parseInt(str.slice(0, 2))
  let minutes = parseInt(str.slice(3, 5))
  let timeOfDay = str.slice(6, 8) 
  if (timeOfDay === 'PM' && hours != 12) {
    hours += 12
  }
  return new Date(0, 0, 0, hours, minutes, 0, 0)
}

const format = (time) => { 
  let formatted = ''
  formatted += formatHours(time.getHours()) + ':'
  formatted += formatMinutes(time.getMinutes()) + ' '
  if (time.getHours() > 11) {
    formatted += 'PM'
  } else {
    formatted += 'AM'
  }
  return formatted
}

const formatHours = (hours) => {
  let formatted = hours % 12
  if (formatted === 0) {
    formatted = 12
  }
  return formatted.toString()
}

const formatMinutes = (minutes) => {
  let formatted = minutes.toString()
  if (formatted.length < 2) {
    formatted = "0" + formatted
  }
  return formatted
}

module.exports = { formatTime, stringToDate }
