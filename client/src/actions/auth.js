import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

// Register User
export const register = ({ email, password }) => async dispatch => {
  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });
  console.log('Wht');

  try {
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      console.log('Wht');
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};
