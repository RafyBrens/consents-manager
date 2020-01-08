import { getListConsents } from './listConsentsSelectors';

describe('Redux > consent > listConsentsSelectors', () => {
  const state = {
    listConsents: {
      data: [],
      meta: {
        callingApi: false,
      },
      errors: {
        get: null,
      },
    },
  };

  /* All selectors are very simple, since Redux selectors are pure functions */
  it('returns consents ', () => {
    expect(getListConsents(state)).toBe(state.listConsents.data);
  });
});
