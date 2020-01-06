import {
  CHANGE_NAME_CONSENT,
  CHANGE_EMAIL_CONSENT,
  CHANGE_AGREEMENTS_CONSENT,
} from './actionTypes';

const initialState = {
  name: '',
  email: '',
  agreements: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME_CONSENT:
      return {...state, name: action.payload};
    case CHANGE_EMAIL_CONSENT:
      return {...state, email: action.payload};
    case CHANGE_AGREEMENTS_CONSENT: {
      if (action.payload.checked) {
        return {
          ...state,
          agreements: [...state.agreements, Number(action.payload.id)],
        };
      }
      const newAgrements = state.agreements.filter(
        a => a !== Number(action.payload.id)
      );
      return {...state, agreements: [...newAgrements]};
    }

    default:
      return state;
  }
};
