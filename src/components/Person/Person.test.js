import React from 'react';
import { shallow } from 'enzyme';
import Person from './Person';

describe('Person', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Person
      key={1}
      id={1}
      photo='./eric.jpg'
      name="Eric"
      quote="You miss all the shots you don\'t take."
      superlative="Most Likely to Win the PGA"
      deletePerson={jest.fn()}
      updatePerson={jest.fn()}
      />);

    expect(wrapper).toMatchSnapshot();
  });
});