import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
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
  const store = mockStore({
    consent,
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
        <GiveConsent />
      </Provider>
    );

    /* Basic snapshot test to make sure, that rendered component matches expected footprint. Note we are using `toJson` helper to transform enzyme output to jest snapshot */
    expect(toJson(wrapper)).toMatchSnapshot();

    /* More precise test for input value */
    const name = wrapper
      .find('#nameUser')
      .first()
      .props().value; // here name value is displayed
    expect(name).toBe(consent.data.name); // Rafael is value we expect.

    const email = wrapper
      .find('#email')
      .first()
      .props().value;
    expect(email).toBe(consent.data.email);
  });

  it('dispatches an action on button click', () => {
    const wrapper = mount(
      <Provider store={store}>
        <GiveConsent />
      </Provider>
    );

    /* Search for the button and make enzyme click on it */
    const nameEventObj = { currentTarget: { value: 'test' } };
    const actionName = {
      payload: 'Rafael',
      type: actionTypes.CHANGE_NAME_CONSENT,
    };

    wrapper
      .find('#nameUser')
      .first()
      .simulate('change', nameEventObj);

    /* Check if store.dispatch method was run */
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.getActions()).toEqual([actionName]);

    const emailEventObject = { currentTarget: { value: 'r@gmail.com' } };
    const actionEmail = {
      payload: 'rafybrens@gmail.com',
      type: actionTypes.CHANGE_EMAIL_CONSENT,
    };
    wrapper
      .find('#email')
      .first()
      .simulate('change', emailEventObject);

    /* Check if store.dispatch method was run */
    expect(store.dispatch).toHaveBeenCalledTimes(2);
    expect(store.getActions()).toEqual([actionName, actionEmail]);

    const actionSubmit = {
      type: actionTypes.CREATE_CONSENT_STARTED,
    };
    wrapper
      .find('#email')
      .first()
      .simulate('change', emailEventObject);
  });
});