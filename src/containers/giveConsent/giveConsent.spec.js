import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createMemoryHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { actionTypes } from '../../redux/consent';
import GiveConsent from './giveConsent';

describe('src > containers > GiveConsent', () => {
  /* Create mock store with count value */
  const mockStore = configureStore([thunk]);
  const consent = {
    data: { name: 'Rafael', email: 'rafybrens@gmail.com', agreements: [] },
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
    consent,
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
          <GiveConsent />
        </ConnectedRouter>
      </Provider>
    );

    /* Basic snapshot test to make sure, that rendered component matches expected footprint. Note we are using `toJson` helper to transform enzyme output to jest snapshot */
    expect(toJson(wrapper.find('GiveConsent'))).toMatchSnapshot();

    /* More precise test for input value */
    const name = wrapper
      .find('#nameUser')
      .hostNodes()
      .props().value; // here name value is displayed
    expect(name).toBe(consent.data.name); // Rafael is value we expect.

    const email = wrapper
      .find('#email')
      .hostNodes()
      .props().value;
    expect(email).toBe(consent.data.email);
  });

  it('Does not dispatch any action because button is disabled', () => {
    /* Set agreements value to empty so that button is disabled */
    const newStore = mockStore({
      consent: {
        ...consent,
        data: {
          ...consent.data,
          name: '',
        },
      },
      router: {
        action: 'POP',
        location: props.history.location,
      },
    });
    const wrapper = mount(
      <Provider store={newStore}>
        <ConnectedRouter basename="/" history={history}>
          <GiveConsent />
        </ConnectedRouter>
      </Provider>
    );

    wrapper
      .find('#submitButton')
      .hostNodes()
      .props()
      .onClick();

    /* */
    expect(store.dispatch).toHaveBeenCalledTimes(0);
  });

  it('Fills inputs of give consent page and clicks submit', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedRouter basename="/" history={history}>
          <GiveConsent />
        </ConnectedRouter>
      </Provider>
    );

    /* Search for the input and types on it */
    const nameEventObj = { currentTarget: { value: 'test' } };
    const actionName = {
      payload: 'Rafael',
      type: actionTypes.CHANGE_NAME_CONSENT,
    };

    wrapper
      .find('#nameUser')
      .hostNodes()
      .simulate('change', nameEventObj);

    /* Check if store.dispatch method was run */
    expect(store.dispatch).toHaveBeenCalledTimes(2);
    expect(store.getActions()).toContainEqual(actionName);

    /* Search for the input and types on it */
    const emailEventObject = { currentTarget: { value: 'r@gmail.com' } };
    const actionEmail = {
      payload: 'rafybrens@gmail.com',
      type: actionTypes.CHANGE_EMAIL_CONSENT,
    };
    wrapper
      .find('#email')
      .hostNodes()
      .simulate('change', emailEventObject);

    expect(store.dispatch).toHaveBeenCalledTimes(3);
    expect(store.getActions()).toContainEqual(actionEmail);

    /* Search for the button and make enzyme click on it */
    const actionSubmit = {
      type: actionTypes.CREATE_CONSENT_STARTED,
    };

    wrapper
      .find('#submitButton')
      .hostNodes()
      .props()
      .onClick();

    expect(store.dispatch).toHaveBeenCalledTimes(4);
    expect(store.getActions()).toContainEqual(actionSubmit);
  });
});
