import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Box, Button} from '@material-ui/core';

/* Separte internal imports */
import Sidebar from 'common/components/sidebar';
import Input from 'common/components/input';
import CustomCheckbox from 'common/components/customCheckBox';

import {selectors, actionTypes} from '../../redux/consent';
import useStyles from './styles';

const items = [
  {id: 1, text: 'Receive newsletter'},
  {id: 2, text: 'Be shown targeted ads'},
  {id: 3, text: 'Contribute to anonymous visit statistics'},
];

const GiveConsent = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  /* Get values from Redux store. We defined selector (state => state.consent.email) inside consent feature folder, to make component Redux agnostic */
  const name = useSelector(state => selectors.getConsentName(state));
  const email = useSelector(state => selectors.getConsentEmail(state));
  const agreements = useSelector((state, id) =>
    selectors.getAgreements(state, id)
  );
  const isCheckBoxChecked = id => agreements.includes(id);

  /* `useCallback` hook prevents component from unnecessary rerender, since otherwise child components may render unnecessarily due to the changed reference */
  const handleChangeName = useCallback(
    event => {
      dispatch({
        type: actionTypes.CHANGE_NAME_CONSENT,
        payload: event.target.value,
      });
    },
    [dispatch]
  );

  const handleChangeEmail = useCallback(
    event => {
      dispatch({
        type: actionTypes.CHANGE_EMAIL_CONSENT,
        payload: event.target.value,
      });
    },
    [dispatch]
  );

  const handleChangeAgreement = useCallback(
    event => {
      dispatch({
        type: actionTypes.CHANGE_AGREEMENTS_CONSENT,
        payload: {id: event.target.value, checked: event.target.checked},
      });
    },
    [dispatch]
  );

  return (
    <Sidebar>
      <div className={classes.center}>
        <Box>
          <Input placeholder="Name" onChange={handleChangeName} value={name} />
          <Input
            placeholder="Email address"
            onChange={handleChangeEmail}
            value={email}
          />
          <div className={(classes.center, classes.textAlignCenter)}>
            <p>I agree to:</p>
          </div>
        </Box>
        <Box className={classes.box}>
          {items.map(item => (
            <div key={item.id}>
              <CustomCheckbox
                onChange={handleChangeAgreement}
                checked={isCheckBoxChecked(item.id)}
                value={item.id}
              />
              <span>{item.text}</span>
              <br />
            </div>
          ))}
        </Box>
        <Box className={(classes.center, classes.textAlignCenter)}>
          <Button
            variant="contained"
            color="primary"
            className={classes.submitButton}>
            Give consent
          </Button>
        </Box>
      </div>
    </Sidebar>
  );
};

export default GiveConsent;
