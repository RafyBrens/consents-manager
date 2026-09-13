import {
  GET_CONSENTS_STARTED,
  GET_CONSENTS_FAILED,
  GET_CONSENTS_FINISHED,
} from './actionTypes';
import CounterReducer from './listConsentsReducer';

describe('Redux > consent > listConsentsReducer', () => {
  const initialState = {
    data: [],
    meta: {
      callingApi: false,
    },
    errors: {
      get: null,
    },
  };

  /* All test cases are very simple, since Redux reducers are pure functions */
  it('returns initial state, if non matched action is provided', () => {
    const action = {
      type: 'FOO',
    };
    expect(CounterReducer(initialState, action)).toBe(initialState);
  });

  it('returns callingApi true', () => {
    const nextState = {
      ...initialState,
      meta: { ...initialState.meta, callingApi: true },
    };
    const action = {
      type: GET_CONSENTS_STARTED,
    };
    expect(CounterReducer(initialState, action)).toMatchObject(nextState);
  });

  it('returns error changed', () => {
    const nextState = {
      ...initialState,
      errors: { ...initialState.error, get: 'Something went wrong' },
    };
    const action = {
      type: GET_CONSENTS_FAILED,
      payload: 'Something went wrong',
    };
    expect(CounterReducer(initialState, action)).toMatchObject(nextState);
  });

  it('returns callingApi false', () => {
    const nextState = {
      ...initialState,
      meta: { ...initialState.meta, callingApi: false },
    };
    const action = {
      type: GET_CONSENTS_FINISHED,
      payload: [],
    };
    expect(CounterReducer(initialState, action)).toMatchObject(nextState);
  });
});
