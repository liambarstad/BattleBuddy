import React from 'react'
import AlarmForm from '../../../components/alarms/alarm-form'
import Enzyme, { mount, shallow, configure } from 'enzyme'
import chai, { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
const Mocha = require('mocha')

Enzyme.configure({ adapter: new Adapter() })

jest.mock('expo', () => {
  return require('./mocks/expo-mock')
})

describe('Alarm Form Tests', () => {
  const submitFunc = (info) => {
    return info
  }

  it('will mount without info', () => {
    const form = mount(<AlarmForm />)
    expect(form.find('ScrollView')).to.have.length(1)
    expect(form.find('OptionBox')).to.have.length(5)
    expect(form.find('Button')).to.have.length(1)
  })

  xit('will mount with info', () => {

  })
})
