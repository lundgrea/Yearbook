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


  it('should change the state on input within the form', () => {
    const wrapper = shallow(<PersonForm
      addNewPerson={jest.fn()}
    />);

    const input = wrapper.find('.input-name');
    input.simulate('change', { target: { value: 'George', name: 'name' } })
    expect(wrapper.state('name')).toEqual('George');
  })





  it('should fire the submitPerson method on the click of the submit button' , () => {

  })
})