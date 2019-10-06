import React from 'react'
import { shallow } from 'enzyme'
import SearchForm from './SearchForm'

describe('SearchForm', () => {
    let wrapper
    const mockSearchArticles = jest.fn()

    beforeEach(() => {
        wrapper = shallow(<SearchForm searchArticles={mockSearchArticles} />)
    })

    it('should match the snapshot when rendered correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should update state on handleChange', () => {
        const mockEvent = {target:{ value: 'the who'}}
        const expectedResult = 'THE WHO'

        wrapper.instance().handleChange(mockEvent)

        expect(wrapper.state('input')).toEqual(expectedResult)
    })
})