import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  main: {
    padding: '1rem',
  },
  table: {
    borderSpacing: 0,
    border: '2px solid black',
    width: '100%',
    borderRight: '1px solid',
  },
  tr: {},
  th: {
    margin: 0,
    padding: '0.5rem',
    borderBottom: '2px solid black',
    borderRight: '2px solid black',

    '&$lastChild': {
      borderRight: 0,
    },
  },
  td: {
    margin: 0,
    paddingTop: '0.5rem',
    borderBottom: '1px solid black',
    borderRight: '2px solid black',

    ':lastChild': {
      borderRight: 0,
    },
  },
  pagination: {
    textAlign: 'center',
    padding: '0.5rem',
  },
  pages: {
    display: 'inline-table',
    width: '70%',
  },
  navButton: {
    backgroundColor: 'white',
    border: 'none',
    fontSize: '16px',
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
}));

export default useStyles;
