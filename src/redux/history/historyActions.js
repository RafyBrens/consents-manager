import { push } from 'connected-react-router';

export const redirectTo = address => async dispatch => {
  dispatch(push(address));
};
