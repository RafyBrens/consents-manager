import {
  GET_CONSENTS_STARTED,
  GET_CONSENTS_FAILED,
  GET_CONSENTS_FINISHED,
} from './actionTypes';

const initialState = {
  data: [],
  meta: {
    callingApi: false,
  },
  errors: {
    get: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONSENTS_STARTED:
      return {
        ...state,
        meta: {
          callingApi: true,
        },
      };
    case GET_CONSENTS_FAILED:
      return {
        ...state,
        meta: {
          callingApi: false,
        },
        errors: {
          get: action.payload,
        },
      };
    case GET_CONSENTS_FINISHED:
      return {
        ...state,
        data: [...action.payload],
        meta: {
          callingApi: false,
        },
      };
    default:
      return state;
  }
};
