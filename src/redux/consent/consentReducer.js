import {CHANGE_NAME_CONSENT, CHANGE_EMAIL_CONSENT} from './actionTypes';

const initialState = {
  name: '',
  email: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME_CONSENT:
      return {...state, name: action.payload};
    case CHANGE_EMAIL_CONSENT:
      return {...state, email: action.payload};

    default:
      return state;
  }
};
