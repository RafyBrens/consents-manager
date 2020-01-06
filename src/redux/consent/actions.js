import ConsentService from 'common/api/ConsentService';
import {
  CHANGE_EMAIL_CONSENT,
  CHANGE_NAME_CONSENT,
  CHANGE_AGREEMENTS_CONSENT,
  CREATE_CONSENT_STARTED,
  CREATE_CONSENT_FAILED,
  CREATE_CONSENT_FINISHED,
} from './actionTypes';

export const changeName = value => async dispatch => {
  dispatch({ type: CHANGE_NAME_CONSENT, payload: value });
};
export const changeEmail = value => async dispatch => {
  dispatch({ type: CHANGE_EMAIL_CONSENT, payload: value });
};
export const changeAgreement = payload => async dispatch => {
  dispatch({ type: CHANGE_AGREEMENTS_CONSENT, payload });
};
export const createConsent = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_CONSENT_STARTED });
    const data = await ConsentService.createConsent(getState().consent.data);
    dispatch({ type: CREATE_CONSENT_FINISHED, payload: data });
  } catch (err) {
    dispatch({ type: CREATE_CONSENT_FAILED, payload: err });
  }
};
