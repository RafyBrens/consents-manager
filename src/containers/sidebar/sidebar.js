import React, { useCallback } from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

/* Separte internal imports */
import { historySelectors } from 'redux/history';
import { giveConsentRoute, listConsentRoute } from 'routes/routesAddress';
import { redirectTo } from 'redux/history/historyActions';
import useStyles from './styles';

const Sidebar = props => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const items = [
    { text: 'Give consent', target: giveConsentRoute },
    { text: 'Collected consents', target: listConsentRoute },
  ];

  const handleOnClickItem = useCallback(
    target => dispatch(redirectTo(target)),
    [dispatch]
  );

  const location = useSelector(state => historySelectors.getCurrentUrl(state));
  const itemSelectedClass = target =>
    location === target ? classes.itemSelected : classes.item;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left">
        <List>
          {items.map(item => (
            <div key={item.text} className={itemSelectedClass(item.target)}>
              <Divider />
              <ListItem
                button
                key={item.text}
                onClick={() => handleOnClickItem(item.target)}>
                <ListItemText primary={item.text} disableTypography />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        {props.children}
        <div className={classes.topbar} />
      </main>
    </div>
  );
};

Sidebar.propTypes = { children: PropTypes.node.isRequired };

export default Sidebar;
