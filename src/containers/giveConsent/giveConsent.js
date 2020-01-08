import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button } from '@material-ui/core';

/* Separte internal imports */
import Input from 'common/components/input';
import CustomCheckbox from 'common/components/customCheckBox';
import {
  createConsent,
  changeName,
  changeEmail,
  changeAgreement,
} from 'redux/consent/consentActions';
import Sidebar from '../sidebar';
import { selectors } from '../../redux/consent';
import useStyles from './styles';

const checkBoxItems = [
  { id: 1, text: 'Receive newsletter' },
  { id: 2, text: 'Be shown targeted ads' },
  { id: 3, text: 'Contribute to anonymous visit statistics' },
];

const GiveConsent = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  /* Get values from Redux store. We defined selector (state => state.consent.email) inside consent feature folder, to make component Redux agnostic */
  const name = useSelector(state => selectors.getConsentName(state));
  const email = useSelector(state => selectors.getConsentEmail(state));
  const isSubmitEnabled = useSelector(state =>
    selectors.isSubmitEnabled(state)
  );
  const agreements = useSelector((state, id) =>
    selectors.getAgreements(state, id)
  );
  const isCheckBoxChecked = id => agreements.includes(id);

  /* `useCallback` hook prevents component from unnecessary rerender, since otherwise child components may render unnecessarily due to the changed reference */
  const handleSubmit = useCallback(() => dispatch(createConsent()), [dispatch]);
  const handleChangeName = useCallback(
    event => dispatch(changeName(event.target.value)),
    [dispatch]
  );
  const handleChangeEmail = useCallback(
    event => dispatch(changeEmail(event.target.value)),
    [dispatch]
  );
  const handleChangeAgreement = useCallback(
    event =>
      dispatch(
        changeAgreement({
          id: event.target.value,
          checked: event.target.checked,
        })
      ),
    [dispatch]
  );

  return (
    <Sidebar>
      <div className={classes.center}>
        <Box>
          <Input
            id="nameUser"
            placeholder="Name"
            onChange={handleChangeName}
            value={name}
          />
          <Input
            id="email"
            placeholder="Email address"
            onChange={handleChangeEmail}
            value={email}
          />
          <div className={(classes.center, classes.textAlignCenter)}>
            <p>I agree to:</p>
          </div>
        </Box>

        <Box className={classes.box}>
          {checkBoxItems.map(item => (
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
            id="submitButton"
            variant="contained"
            color="primary"
            disabled={!isSubmitEnabled}
            onClick={handleSubmit}
            className={classes.submitButton}>
            Give consent
          </Button>
        </Box>
      </div>
    </Sidebar>
  );
};

export default GiveConsent;
