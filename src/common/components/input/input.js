import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  input: {
    padding: '5px',
    margin: '20px',
    border: '1px solid black',
    lineHeight: '25px',
    width: '40%',
    fontSize: '14px',
    '&::placeholder': {
      color: 'black',
      fontSize: '14px',
    },
  },
}));

const Input = props => {
  const classes = useStyles();
  const onChange = event => props.onChange(event);
  return (
    <input
      id={props.id}
      placeholder={props.placeholder}
      className={classes.input}
      onChange={onChange}
      value={props.value}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  placeholder: '',
};

export default Input;
