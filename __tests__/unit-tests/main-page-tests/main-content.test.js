import React from 'react'
import MainContent from '../../../components/main-page/main-content'
import Enzyme, { mount, shallow, configure } from 'enzyme'
import chai, { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
const Mocha = require('mocha')

Enzyme.configure({ adapter: new Adapter() })

describe('Main Content Tests', () => {

  it('can mount alarms', () => {
    const rendered = mount(<MainContent name='alarms'/>)
    expect(rendered.find('Alarms')).to.have.length(1)
  })

  it('can mount itineraries', () => {
    const rendered = mount(<MainContent name='itinerary' />)
    expect(rendered.find('Itinerary')).to.have.length(1)
  })

  it('can mount locations', () => {
    const rendered = mount(<MainContent name='locations' />)
    expect(rendered.find('Locations')).to.have.length(1)
  })

})
