import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  box: {
    border: '1px solid lightgray',
    margin: 'auto',
    color: 'gray',
  },
  center: {
    margin: 'auto',
    width: '50%',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: 'rgb(10, 138, 251)',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '20px',
    width: '30%',
    textTransform: 'none',
  },
  checkbox: {
    '&$checked': {
      color: 'rgb(10, 138, 251)',
    },
  },
}));

export default useStyles;
