import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', function() {
  let wrapper = shallow(<App />);
  console.log(wrapper.debug());
});
