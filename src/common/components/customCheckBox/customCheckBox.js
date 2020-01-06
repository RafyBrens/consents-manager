import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const checkBoxStyles = () => ({
  root: {
    '&$checked': {
      color: 'rgb(10, 138, 251)',
    },
  },
  checked: {},
});

const CustomCheckBox = withStyles(checkBoxStyles)(Checkbox);
export default CustomCheckBox;
