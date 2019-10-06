import React from 'react'
import { shallow } from 'enzyme'
import Menu from './Menu'

describe('Menu', () => {
    it('should match the snapshot when rendered correctly', () => {
        const wrapper = shallow(<Menu />)
        expect(wrapper).toMatchSnapshot();
    })
})