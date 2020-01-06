import {} from './actionTypes';
import CounterReducer from './consentReducer';

describe('Redux > consent > consentReducer', () => {
  /* All test cases are very simple, since Redux reducers are pure functions */
  it('returns initial state, if non matched action is provided', () => {
    const initialState = {
      data: { name: 'Rafael', email: 'rafybrens@gmail.com', agreements: [] },
      meta: {
        callingApi: false,
      },
      errors: {
        create: null,
      },
    };
    const action = {
      type: 'FOO',
    };
    expect(CounterReducer(initialState, action)).toBe(initialState);
  });
});
