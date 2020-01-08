import {
  CHANGE_EMAIL_CONSENT,
  CHANGE_NAME_CONSENT,
  CHANGE_AGREEMENTS_CONSENT,
} from './actionTypes';
import CounterReducer from './consentReducer';

describe('Redux > consent > consentReducer', () => {
  const initialState = {
    data: { name: 'Rafael', email: 'rafybrens@gmail.com', agreements: [] },
    meta: {
      callingApi: false,
    },
    errors: {
      create: null,
    },
  };

  /* All test cases are very simple, since Redux reducers are pure functions */
  it('returns initial state, if non matched action is provided', () => {
    const action = {
      type: 'FOO',
    };
    expect(CounterReducer(initialState, action)).toBe(initialState);
  });

  it('returns name changed', () => {
    const nextState = {
      ...initialState,
      data: { ...initialState.data, name: 'newName' },
    };
    const action = {
      type: CHANGE_NAME_CONSENT,
      payload: 'newName',
    };
    expect(CounterReducer(initialState, action)).toMatchObject(nextState);
  });

  it('returns email changed', () => {
    const nextState = {
      ...initialState,
      data: { ...initialState.data, email: 'newEmail' },
    };
    const action = {
      type: CHANGE_EMAIL_CONSENT,
      payload: 'newEmail',
    };
    expect(CounterReducer(initialState, action)).toMatchObject(nextState);
  });

  it('returns agreements changed', () => {
    const nextState = {
      ...initialState,
      data: { ...initialState.data, agreements: [1] },
    };
    const action = {
      type: CHANGE_AGREEMENTS_CONSENT,
      payload: { id: 1, checked: true },
    };
    expect(CounterReducer(initialState, action)).toMatchObject(nextState);
  });
});
