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
        errors: {
          get: action.payload,
        },
      };
    case GET_CONSENTS_FINISHED:
      return { ...initialState, data: [...action.payload] };
    default:
      return state;
  }
};
