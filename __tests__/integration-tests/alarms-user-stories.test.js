import React from 'react'
import App from '../../App'
import { Button } from 'react-native'
import Alarm from '../../components/alarms/alarm'
import Enzyme, { mount, shallow, configure } from 'enzyme'
import chai, { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import { sinon } from 'sinon'
const Mocha = require('mocha')
const pry = require('pryjs')
const AlarmModel = require('../../models/alarms')

Enzyme.configure({ adapter: new Adapter() })

jest.mock('realm', () => {
  return require('./mocks/realm-mock').default
})

jest.mock('expo', () => {
  return require('./mocks/expo-mock').default
})

describe('Alarms user stories', () => {
  xit('Will render alarms', () => {
    AlarmModel.create({ hours: 10, minutes: 40 })
      .then(alarm => {
        const app = mount(<App />)
        expect(app.find(<Alarm />)).to.have.length(1)
        })
  })

  it('Can create an alarm', () => {
    const app = mount(<App />)
    app.find("Button").last().props().onPress() 
    app.update()

    expect(app.find("CreateScreen").children().first().props().visible).to.equal(true)

    app.find('.timeInput').first().props().onPress()
    app.update()
    
    timeInput = app.find('.updateValue').first()
    expect(timeInput.props().visible).to.equal(true)

    timeInput.children().find('Popout').children().find('Button').props().onPress()
    app.update()
    timeInput = app.find('.updateValue').first()

    expect(timeInput.props().visible).to.equal(false)

    app.find('.createSubmit').props().onPress()
    app.update()
    
    expect(app.find("Alarm")).to.have.length(1)
    expect(app.find('Alarm').children()).to.have.length(5)
  })

  xit('Can update an alarm', () => {

  })

  xit('Can delete an alarm', () => {

  })

})
