import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import local from '../../data/local';


describe('App', () => {

  let wrapper 

  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  it('should match the snapshot when data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should change the current property of state when changeCurrent is called', () => {
    const mockEvent = {
      target: {
        id: 'science'
      }
    }
    wrapper.instance().changeCurrent(mockEvent)

    expect(wrapper.state('current').length).toEqual(8);
  })

  it('should display articles based on search text', () => {
    const mockText = 'THE WHO'
    const defaultState = {current: local, displayed: local}
    wrapper.instance().setState(defaultState)
    wrapper.instance().forceUpdate()
    console.log('wrapper state', wrapper.state.current)
    wrapper.instance().searchArticles(mockText)

      expect(wrapper.state('displayed')).toEqual([{
      id: 1,
      headline: 'The Who postpones Denver Concert at the Pepsi Center',
      img: 'https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg',
      description: 'Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.',
      url: 'https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/'
    }])
  })
});
