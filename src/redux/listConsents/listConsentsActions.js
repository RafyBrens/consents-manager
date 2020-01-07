import ConsentService from 'common/api/ConsentService';
import {
  GET_CONSENTS_STARTED,
  GET_CONSENTS_FAILED,
  GET_CONSENTS_FINISHED,
} from './actionTypes';

export const getConsents = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_CONSENTS_STARTED });
    const data = await ConsentService.getConsents();
    dispatch({ type: GET_CONSENTS_FINISHED, payload: data });
  } catch (err) {
    dispatch({ type: GET_CONSENTS_FAILED, payload: err.message });
  }
};
