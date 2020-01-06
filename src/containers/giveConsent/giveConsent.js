import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box, Checkbox} from '@material-ui/core';
import Sidebar from 'common/components/sidebar';

const useStyles = makeStyles(theme => ({
  box: {
    border: '1px solid lightgray',
    margin: 'auto',
    color: 'gray',
  },
  center: {
    margin: 'auto',
    width: '50%',
  },
  input: {
    padding: '5px',
    margin: '20px',
    border: '1px solid black',
    lineHeight: '40px',
    width: '40%',
    '&::placeholder': {
      color: 'black',
      fontSize: '16px',
    },
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: 'rgb(10, 138, 251)',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '10px',
    height: '60px',
    width: '25%',
    borderRadius: '10px',
  },
}));

const GiveConsent = () => {
  const classes = useStyles();

  return (
    <Sidebar>
      <div className={classes.center}>
        <Box>
          <input placeholder="Name" className={classes.input} />
          <input placeholder="Email address" className={classes.input} />
          <div className={(classes.center, classes.textAlignCenter)}>
            <p>I agree to:</p>
          </div>
        </Box>
        <Box className={classes.box}>
          <Checkbox color="primary" />
          <span>Receive newsletter</span>

          <br />
          <Checkbox color="primary" />
          <span>Be shown targeted ads</span>
          <br />

          <Checkbox color="primary" />
          <span>Contribute to anonymous visit statistics</span>
          <br />
        </Box>
        <Box className={(classes.center, classes.textAlignCenter)}>
          <button type="button" className={classes.submitButton}>
            Give consent
          </button>
        </Box>
      </div>
    </Sidebar>
  );
};

export default GiveConsent;
