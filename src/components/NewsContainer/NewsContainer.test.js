import React from 'react'
import { shallow } from 'enzyme'
import NewsContainer from './NewsContainer'

describe('NewsContainer', () => {
    it('should match the snapshot when rendered correctly', () => {
        let mockCurrent = [
        {id: 1, headline:'headline 1', description: 'description 1', img: 'woof', url: 'woof dot com'},
        {id: 2, headline: 'headline 2', description: 'description 2', img: 'meow', url: 'meow dot com'} 
        ]
        const wrapper = shallow(<NewsContainer
            current = {mockCurrent}
             />)
        expect(wrapper).toMatchSnapshot()
    })
})