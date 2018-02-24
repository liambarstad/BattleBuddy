const formatTime = (time) => {
  if (typeof time === 'object') {
    return format(time)
  } else if (typeof time === 'string') {
    return time
  } else {
    return format(new Date)
  }
}

const format = (time) => { 
  let formatted = ''
  formatted += time.getHours().toString() + ':'
  formatted += time.getMinutes().toString() + ' '
  if (time.getHours() > 11) {
    formatted += 'PM'
  } else {
    formatted += 'AM'
  }
  return formatted
}

module.exports = { formatTime }
