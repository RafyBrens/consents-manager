import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CustomTable from 'common/components/table';
import { getConsents } from 'redux/listConsents/listConsentsActions';
import { getListConsents } from 'redux/listConsents/listConsentsSelectors';
import Sidebar from '../sidebar';
import useStyles from './styles';

const ListConsents = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getConsents());
  }, [dispatch]);

  const data = useSelector(state => getListConsents(state));

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Consent given for',
        accessor: 'agreementsText',
      },
    ],
    []
  );

  return (
    <Sidebar>
      <div className={classes.center}>
        <CustomTable columns={columns} data={data} pageSize={2} />
      </div>
    </Sidebar>
  );
};

export default ListConsents;
