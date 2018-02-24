import React from 'react'
import Alarms from '../../../components/alarms/alarms'
import Alarm from '../../../components/alarms/alarm'
import Enzyme, { mount, shallow, configure } from 'enzyme'
import chai, { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import { sinon } from 'sinon'
const Mocha = require('mocha')
const AlarmModel = require('../../../models/alarms')

Enzyme.configure({ adapter: new Adapter() })

describe('Alarms tests', () => {
  it('Will mount alarms', () => {
    AlarmModel.create({ time: new Date, status: 'inactive' })    
    const alarms = mount(<Alarms />)
    expect(alarms.find(Alarm)).to.have.length(1)
  })
})
