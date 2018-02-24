import React from 'react'
import Alarm from '../../../components/alarms/alarm'
import Enzyme, { mount, shallow, configure } from 'enzyme'
import chai, { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import { sinon } from 'sinon'
const Mocha = require('mocha')
const AlarmModel = require('../../../models/alarms')

Enzyme.configure({ adapter: new Adapter() })

describe('Alarm tests', () => {
  it('will render from db JSON', () => {
    AlarmModel.create({ hours: 15, minutes: 59 })
      .then(newAlarm => {
        const alarmInfo = JSON.stringify(newAlarm)
        const alarm = shallow(<Alarm info=alarmInfo />)
        expect(alarm.dive().find(<Image />)).to.have.length(4)
        expect(alarm.dive().find(<Text />)).to.have.length(1)
  })
})
