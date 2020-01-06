import {makeStyles} from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  topbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: theme.spacing(3),
  },
  item: {
    marginTop: '10px',
  },
}));

export default useStyles;
