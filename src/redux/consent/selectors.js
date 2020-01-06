import { validateEmail } from 'common/utils/textValidator';

export const getConsentName = state => state.consent.data.name;
export const getConsentEmail = state => state.consent.data.email;
export const getAgreements = state => state.consent.data.agreements;
export const isSubmitEnabled = state => {
  const emailValid = validateEmail(state.consent.data.email);
  return (
    state.consent.data.name &&
    emailValid &&
    state.consent.data.agreements.length > 0
  );
};
