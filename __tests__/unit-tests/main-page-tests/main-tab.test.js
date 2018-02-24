import React from 'react'
import MainTab from '../../../components/main-page/main-tab'
import { Text, View } from 'react-native'
import Enzyme, { mount, shallow, configure } from 'enzyme'
import chai, { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
const Mocha = require('mocha')

Enzyme.configure({ adapter: new Adapter() })

describe('Main Tab Tests', () => {
  it('will mount with inactive style', () => {
    const mainTab = mount(<MainTab active="0" />)
    expect(mainTab.find(View)).to.have.length(2)
    expect(mainTab.find(Text)).to.have.length(1)
  })

  it('will mount with active style', () => {
    const mainTab = mount(<MainTab active="1" />)
    expect(mainTab.find('View')).to.have.length(2)
    expect(mainTab.find('Text')).to.have.length(1)
  })
})
