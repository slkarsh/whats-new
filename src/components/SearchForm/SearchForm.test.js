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

    it('should update state to an empty string when resetSearchBar is called', () => {
        const mockState = {input: 'woof'}
        wrapper.setState(mockState)

        wrapper.instance().resetSearchBar()

        expect(wrapper.state('input')).toEqual('')
    })

    it('should call resetSearchBar when searchArticles is called', () => {
        const mockEvent = {preventDefault: jest.fn()}
        wrapper.instance().resetSearchBar = jest.fn()
        const mockState = ({input: 'THE WHO'})
        wrapper.setState(mockState)

        wrapper.instance().searchArticles(mockEvent)

        expect(wrapper.instance().resetSearchBar).toHaveBeenCalled()
    })
})