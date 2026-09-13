import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/store';
import App from './app';

it('renders without crashing', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']} keyLength={0}>
        <App />
      </MemoryRouter>
    </Provider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
