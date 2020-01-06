import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

/* Separte internal imports */
import useStyles from './styles';

const Sidebar = props => {
  const classes = useStyles();
  const items = ['Give consent', 'Collected consents'];

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
          {items.map(text => (
            <div key={text} className={classes.item}>
              <Divider />
              <ListItem button key={text}>
                <ListItemText primary={text} />
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

Sidebar.propTypes = {children: PropTypes.node.isRequired};

export default Sidebar;
