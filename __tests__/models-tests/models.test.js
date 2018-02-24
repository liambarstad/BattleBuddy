import chai, { expect } from 'chai'
const pry = require('pryjs')
const Mocha = require('mocha')
const Alarms = require('../../models/alarms')

jest.mock('realm', () => {
  return require('./mocks/realm-mock').default
})

describe('Alarms tests', () => {
  it('can get all alarms', () => {
    Alarms.get() 
      .then(alarms => {
        expect(alarms.length).to.equal(0)
      })
  })

  it('can create an alarm', async () => {
    const newAlarm = await Alarms.create({ hours: 10, minutes: 20 })
    const allAlarms = await Alarms.get()
    expect(newAlarm).to.have.property('hours')
    expect(newAlarm).to.have.property('minutes')
    expect(newAlarm).to.have.property('status')
    expect(newAlarm).to.have.property('localized')
    expect(newAlarm).to.have.property('itemized')
    expect(newAlarm.hours).to.equal(10)
    expect(newAlarm.minutes).to.equal(20)
    expect(allAlarms).to.include(newAlarm)
  })

  it('cant create empty alarm', async () => {
    const newAlarm = await Alarms.create()
    expect(newAlarm).to.have.property('error')
    expect(newAlarm.error).to.equal("Invalid hours")
  })

  it('cant create alarm with incorrect values', async () => {
      const newAlarm = await Alarms.create({ hours: 10, minutes: 75 }) 
      expect(newAlarm).to.have.property('error')
      expect(newAlarm.error).to.equal("Invalid minutes")
  })
})
