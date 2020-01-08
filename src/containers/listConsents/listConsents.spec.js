import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createMemoryHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import ListConsents from './listConsents';

describe('src > containers > ListConsents', () => {
  /* Create mock store with count value */
  const mockStore = configureStore([thunk]);
  const listConsents = {
    data: [{ name: 'Rafael', email: 'rafybrens@gmail.com', agreements: [1] }],
    meta: {
      callingApi: false,
    },
    errors: {
      create: null,
    },
  };

  const history = createMemoryHistory();
  // Mock props
  const props = {
    action: 'POP',
    location: {
      pathname: '/path/to/somewhere',
    },
    history,
  };

  const store = mockStore({
    listConsents,
    router: {
      action: 'POP',
      location: props.history.location,
    },
  });

  /* Add jest mock spy to watch for store.dispatch method. See https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname for more info */
  jest.spyOn(store, 'dispatch');

  /* Jest hook which runs before each test, https://jestjs.io/docs/en/api#beforeeachfn-timeout */
  beforeEach(() => {
    /* Clear any saved mock data from previous tests, because jest saves calls data for spies and mocks, https://jestjs.io/docs/en/mock-function-api#mockfnmockclear */
    store.dispatch.mockClear();
  });

  it('renders without crashing', () => {
    /* We can only use enzyme `mount`, no `shallow`, since we are using React hooks, which `shallow` doesn't support yet */
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedRouter basename="/" history={history}>
          <ListConsents />
        </ConnectedRouter>
      </Provider>
    );

    /* Basic snapshot test to make sure, that rendered component matches expected footprint. Note we are using `toJson` helper to transform enzyme output to jest snapshot */
    expect(toJson(wrapper.find('ListConsents'))).toMatchSnapshot();
  });
});
