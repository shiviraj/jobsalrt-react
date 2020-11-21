import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    boxShadow: '4px 4px 4px rgba(0,0, 0, 0.4)',
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: theme.spacing(1) / 2,
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    '& p': {
      margin: theme.spacing(2),
    },
    '& ul': {
      listStyleType: '→',
    },

    '& li': {
      marginLeft: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
      '& p': {
        margin: theme.spacing(1),
      },
    },
  },
}));

export default useStyles;
