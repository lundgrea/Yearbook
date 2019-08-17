import React from 'react';
import { shallow } from 'enzyme';
import Cohort from './Cohort';

describe('Cohort', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const mockData = [{id: 1, name: 'Eric', quote: 'You miss all the shots you don\'t take.', superlative: 'Most Likely to Win the PGA', photo: './eric.jpg'},
    {id: 2, name: 'Amy', quote: 'I believe in you, cuties!', superlative: 'Most Likely to Be an Actual Superhero', photo: './amy.jpg'}
    ]
    const wrapper = shallow(<Cohort
        title="Staff"
        data={mockData}
        deletePerson={jest.fn()}
        updatePerson={jest.fn()}
      />);

    expect(wrapper).toMatchSnapshot();
  });
});