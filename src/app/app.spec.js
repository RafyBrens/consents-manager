import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import toJson from 'enzyme-to-json';
import store from '../redux/store';
import App from './app';

it('renders without crashing', () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
