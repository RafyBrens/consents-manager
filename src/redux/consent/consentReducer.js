import {
  CHANGE_NAME_CONSENT,
  CHANGE_EMAIL_CONSENT,
  CHANGE_AGREEMENTS_CONSENT,
  CREATE_CONSENT_STARTED,
  CREATE_CONSENT_FAILED,
  CREATE_CONSENT_FINISHED,
} from './actionTypes';

const initialState = {
  data: { name: '', email: '', agreements: [] },
  meta: {
    callingApi: false,
  },
  errors: {
    create: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME_CONSENT:
      return { ...state, data: { ...state.data, name: action.payload } };
    case CHANGE_EMAIL_CONSENT:
      return { ...state, data: { ...state.data, email: action.payload } };
    case CHANGE_AGREEMENTS_CONSENT: {
      if (action.payload.checked) {
        return {
          ...state,
          data: {
            ...state.data,
            agreements: [...state.data.agreements, Number(action.payload.id)],
          },
        };
      }
      const newAgrements = state.data.agreements.filter(
        a => a !== Number(action.payload.id)
      );
      return {
        ...state,
        data: { ...state.data, agreements: [...newAgrements] },
      };
    }
    case CREATE_CONSENT_STARTED:
      return {
        ...state,
        meta: {
          callingApi: true,
        },
      };
    case CREATE_CONSENT_FAILED:
      return {
        ...state,
        errors: {
          create: action.payload,
        },
      };
    case CREATE_CONSENT_FINISHED:
      return { ...initialState };
    default:
      return state;
  }
};
