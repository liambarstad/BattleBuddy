import { validateNewAlarm } from '../helpers/alarm-helper'
const { AlarmSchema, ItineraryItemSchema, LocationSchema } = require('../schema')
const Realm = require('realm')

const openRealm = () => {
  return Realm.open({schema: [LocationSchema, ItineraryItemSchema, AlarmSchema]})
    .then(realm => {
      return realm
    })
}

class AlarmModel {

  async get(obj={}) {
    try {
      let realm = await openRealm()
      return realm.objects('Alarm')
    } catch (e) {
      return e
    }
  }

  async create(obj={}) {
    try {
      let realm = await openRealm()
      realm.write(async () => {
        const alarmInfo = _addID(realm, validateNewAlarm(obj))
        return realm.create('Alarm', alarmInfo)
      })
    } catch (e) { 
      return e
    }
  }

  async update(obj={}) {
    try {
      let realm = await openRealm()
      realm.write(() => {
        const alarmInfo = validateUpdateAlarm(obj)
        return realm.create('Alarm', { alarmInfo }, true)
      })
    } catch (e) {
      return e
    }
  }

  async destroy(id) {
    try {
       
    } catch (e) {
      return e
    }
  }

  _addID = (realm, obj={}) => {
    let newId = realm.objects('Alarm').filtered('id@max') + 1
    obj.id = newId
    return obj
  }

}

module.exports = new AlarmModel()
