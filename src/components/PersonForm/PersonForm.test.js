import React from 'react';
import { shallow } from 'enzyme';
import PersonForm from './PersonForm';

describe('PersonForm', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<PersonForm 
        addNewPerson={jest.fn()}
    />)
    expect(wrapper).toMatchSnapshot()
  })
})