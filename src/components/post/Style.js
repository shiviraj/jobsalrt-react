import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
    boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.4)',
  },
  tableContainer: {
    borderRadius: theme.spacing(1) / 2,
    border: `1px solid ${theme.palette.primary.main}`,
  },
  title: {
    color: '#fff',
    background: theme.palette.primary.light,
    paddingLeft: theme.spacing(1),
    width: 'auto',
  },
  table: {
    '& td, th': {
      border: `1px solid ${theme.palette.primary.main}`,
      padding: theme.spacing(1),
    },
  },
}));

export default useStyles;
