import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(1) / 2,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  tableContainer: {
    borderRadius: theme.spacing(1) / 2,
    border: `1px solid ${theme.palette.primary.main}`,
  },
  title: {
    color: '#fff',
    background: theme.palette.primary.light,
    paddingLeft: theme.spacing(1),
    textTransform: 'capitalize',
  },
  table: {
    '& td, th': {
      border: `1px solid ${theme.palette.primary.main}`,
      padding: theme.spacing(1),
    },
    [theme.breakpoints.down('sm')]: {
      '& td.small, th.small': {
        display: 'none',
      },
    },
  },
  links: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      height: theme.breakpoints.values.sm / 2,
      overflow: 'auto',
    },

    '& a': {
      width: 'auto',
      margin: theme.spacing(1) / 2,
      border: `1px solid ${theme.palette.secondary.main}`,
      borderRadius: theme.spacing(1) / 2,
      padding: '0',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    '& a:hover': {
      border: `1px solid ${theme.palette.secondary.main}`,
      background: theme.palette.secondary.light,
    },
    '& .active, & .active:hover': {
      border: `1px solid ${theme.palette.secondary.main}`,
      background: theme.palette.secondary.main,
      color: '#fff',
    },
  },
  link: {
    '& + a': {
      marginLeft: theme.spacing(1),
    },
  },
}));

export default useStyles;
