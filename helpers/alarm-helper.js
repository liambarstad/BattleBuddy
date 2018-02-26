import { formatTime } from './time-helper'

const validateNew = (obj={}) => {
  let info = {}
  info.active = obj.active ?
    parseInt(obj.active) :
    0
  info.time = obj.time || formatTime(new Date)
  info.itemized = obj.itemized ?
    parseInt(obj.itemized) :
    0
  info.localized = obj.localized ?
    parseInt(obj.localized) :
    0
  return info
}

module.exports = { validateNew }
