import React from 'react'
import MainTabs from '../../../components/main-page/main-tabs'
import MainTab from '../../../components/main-page/main-tab'
import Enzyme, { mount, shallow, configure } from 'enzyme'
import chai, { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
const Mocha = require('mocha')

Enzyme.configure({ adapter: new Adapter() })

describe('Main Tabs Tests', () => {
  const rendered = mount(<MainTabs />)

  it('renders tabs', () => {
    expect(rendered.find(MainTab)).to.have.length(3)
  })
})
