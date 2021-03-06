import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<App
    />)
  expect(wrapper).toMatchSnapshot()
  })

  it('should update state with a new person when addNewPerson is called', () => {
    const wrapper = shallow(<App />);
    const mockPerson = { 
      id: 1, 
      name: 'Eric', 
      quote: 'You miss all the shots you don\'t take.', 
      superlative: 'Most Likely to Win the PGA', 
      photo: './eric.jpg'
     };
    wrapper.instance().addNewPerson(mockPerson);
    expect(wrapper.state('staff')).toHaveLength(13)
  })
})