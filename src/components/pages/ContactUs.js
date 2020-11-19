import React, { useState, useEffect } from 'react';
import fetchApi from '../../api/fetchApi';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, TextField, Button } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  root: { flexGrow: '1' },
  paper: {
    margin: theme.spacing(1),
    [theme.breakpoints.up('sm')]: { margin: '20px auto' },
    maxWidth: theme.breakpoints.values.sm,
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.4)',
  },
  title: {
    textTransform: 'capitalize',
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  error: { color: theme.palette.error.main },
  success: { color: theme.palette.success.dark },
  form: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Input = ({ value: defaultValue, label, onChange, ...rest }) => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (e) => {
    const inputValue = e.currentTarget.value;
    onChange(inputValue);
    setValue(inputValue);
  };

  return (
    <TextField
      label={label}
      variant="outlined"
      value={value}
      onChange={handleChange}
      {...rest}
    />
  );
};

const ContactUs = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const classes = useStyle();

  const title = props.location.pathname.split('/')[2] || '';

  useEffect(() => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }, [title]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    fetchApi({
      type: 'SHARE_FEEDBACK',
      payload: { title, name, email, subject, message },
    })
      .then((res) => {
        setError(false);
        setStatus('Thank you for supporting us!!!');
        setIsSending(false);
      })
      .catch((e) => {
        setError(true);
        setStatus('Something went wrong, Please try again!!!');
        setIsSending(false);
      });
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined">
        <Typography variant="h4" className={classes.title} color="primary">
          {title.replace('-', ' ')}
        </Typography>
        <form
          onSubmit={handleSubmit}
          className={classes.form}
          autoComplete="off"
        >
          <Typography
            variant="body1"
            className={error ? classes.error : classes.success}
          >
            {status}
          </Typography>

          <Input
            value={name}
            onChange={setName}
            label="Name"
            placeholder="eg. john doe"
            required
          />
          <Input
            value={email}
            onChange={setEmail}
            label="Email"
            type="email"
            placeholder="eg. john@doe.com"
            required
          />
          <Input value={subject} onChange={setSubject} label="Subject" />
          <Input
            value={message}
            onChange={setMessage}
            label="Message"
            multiline
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isSending}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default ContactUs;
