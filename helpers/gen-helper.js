const boolToInt = (bool) => {
  if (bool === true) {
    return '1'
  } else {
    return '0'
  }
}

const intToBool = (integer) => {
  return Boolean(parseInt(integer))
}

module.exports = { boolToInt, intToBool }
