import React from 'react'
import CreateScreen from '../../../components/main-page/create-screen'
import { Modal } from 'react-native'
import Enzyme, { mount, shallow, configure } from 'enzyme'
import chai, { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
const pry = require('pryjs')
const Mocha = require('mocha')

Enzyme.configure({ adapter: new Adapter() })

jest.mock('expo', () => {
  return require('./mocks/expo-mock')
})

describe('CreateScreen Tests', () => {
  const submitFunc = () => {
    return 'eyyy'
  }

  const closeFunc = () => {
    return 'ohhhhh'
  }
  
  it('will mount with inactive modal', () => {
    const createScreen = mount(<CreateScreen active='0' resource='alarms' onSubmit={submitFunc} onClose={closeFunc}/>)

    expect(createScreen.children().first().props().visible).to.equal(false)
    expect(createScreen.find('AlarmForm')).to.have.length(1)
    expect(createScreen.find('ItineraryForm')).to.have.length(0)
    expect(createScreen.find('NewLocationForm')).to.have.length(0)
  })

  it('will mount with active modal', () => {
    const createScreen = mount(<CreateScreen active='1' resource='alarms' onSubmit={submitFunc} onClose={closeFunc}/>)
    
    expect(createScreen.children().first().props().visible).to.equal(true)
    expect(createScreen.find('AlarmForm')).to.have.length(1)
  })
})
