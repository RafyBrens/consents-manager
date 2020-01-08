import {
  getConsentName,
  getConsentEmail,
  getAgreements,
  isSubmitEnabled,
} from './consentSelectors';

describe('Redux > consent > consentSelectors', () => {
  const state = {
    consent: {
      data: { name: 'Rafael', email: 'r@r.com', agreements: [1, 2] },
      meta: {
        callingApi: false,
      },
      errors: {
        create: null,
      },
    },
  };

  /* All selectors are very simple, since Redux selectors are pure functions */
  it('returns consent name ', () => {
    expect(getConsentName(state)).toBe(state.consent.data.name);
  });
  it('returns consent email ', () => {
    expect(getConsentEmail(state)).toBe(state.consent.data.email);
  });
  it('returns consent agreements ', () => {
    expect(getAgreements(state)).toBe(state.consent.data.agreements);
  });
  it('verify fields are correctly filled ', () => {
    expect(isSubmitEnabled(state)).toBe(true);
  });
});
