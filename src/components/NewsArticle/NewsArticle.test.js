import React from 'react'
import { shallow } from 'enzyme'
import NewsArticle from './NewsArticle'

describe('NewsArticle', () => {
    it('should match the snapshot when rendered correctly', () => {
        const wrapper = shallow(<NewsArticle 
            imgSrc='www.fakeurl.com'
            headline='Today is Thursday'
            description='tomorrow will be Friday'
            link='www.linktoarticle.com'
        />)

        expect(wrapper).toMatchSnapshot()
    })
})