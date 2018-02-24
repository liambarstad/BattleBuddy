import React from 'react'
import App from '../../App'
import MainTabs from '../../components/main-page/main-tabs'
import MainContent from '../../components/main-page/main-content'
import Enzyme, { mount, shallow, configure } from 'enzyme'
import chai, { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
const Mocha = require('mocha')

Enzyme.configure({ adapter: new Adapter() })

jest.mock('expo', () => {
  return require('./mocks/expo-mock')
})

describe('App Tests', () => {
  const rendered = mount(<App />)

  it('Mounts main tabs', () => {
    expect(rendered.find(MainTabs)).to.have.length(1)
  })

  it('Mounts main content', () => {
    expect(rendered.find(MainContent)).to.have.length(1)
  })
})
