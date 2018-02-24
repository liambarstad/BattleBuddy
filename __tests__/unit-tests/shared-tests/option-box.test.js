import React from 'react'
import OptionBox from '../../../components/shared/option-box'
import Enzyme, { mount, shallow, configure } from 'enzyme'
import chai, { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
const formatTime = require('../../../helpers/time-helper').formatTime
const Mocha = require('mocha')
const pry = require('pryjs')

Enzyme.configure({ adapter: new Adapter() })

jest.mock('expo', () => {
  return require('./mocks/expo-mock')
})

describe('Option Box Tests', () => {
  it('will render a time element', () => {
    const box = mount(<OptionBox
                        name='Time'
                        type='time'
                        popout='true'
                        onSubmit={(time) => outputTime(time)}
                        />)
    const currentTime = formatTime(new Date)
    expect(box.find('Text').first().text()).to.equal('Time')
    expect(box.find('Text').last().text()).to.equal(currentTime)
  })
})
