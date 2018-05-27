import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should render App', () => {
    const app = shallow(<App />);
    expect(app.find('Header')).toHaveLength(1);
  })
});
