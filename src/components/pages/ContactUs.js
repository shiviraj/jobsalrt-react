import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fetchApi from '../../api/fetchApi';

const Section = styled.div`
  width: 50%;
  margin: 32px auto;
  border: 1px solid #0c4da2;
  padding: 16px;
`;

const Title = styled.h2`
  text-transform: capitalize;
  padding: 4px 16px;
  color: #0c4da2;
`;

const Form = styled.form`
  padding: 4px 16px;
`;

const InputLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
`;

const Label = styled.label`
  margin: 4px 0;
`;

const InputField = styled.input`
  padding: 4px;
  outline: none;
  font-size: 16px;
  &::placeholder {
    font-style: italic;
    color: #333;
    opacity: 0.8;
  }
`;

const TextArea = styled.textarea`
  padding: 4px;
  outline: none;
  font-size: 16px;
  &::placeholder {
    font-style: italic;
    color: #333;
    opacity: 0.8;
  }
`;

const Button = styled.button`
  padding: 8px 32px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  font-weight: 300;
  color: #fff;
  background: #0c4da2;
  border: 2px solid #0c4da2;
`;

const Status = styled.div`
  text-align: center;
  font-size: 20px;
  &.error {
    color: red;
  }
  &.success {
    color: green;
  }
`;

const Input = ({ value: defaultValue, label, onChange, ...rest }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    const inputValue = e.currentTarget.value;
    onChange(inputValue);
    setValue(inputValue);
  };

  return (
    <InputLayout>
      <Label>{label}</Label>
      <InputField value={value} onChange={handleChange} {...rest} />
    </InputLayout>
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
    <Section>
      <Title>{title.replace('-', ' ')}</Title>
      <Status className={error ? 'error' : 'success'}>{status}</Status>
      <Form onSubmit={handleSubmit}>
        <Input
          value={name}
          onChange={setName}
          label="Name *"
          placeholder="eg. john doe"
          required
        />
        <Input
          value={email}
          onChange={setEmail}
          label="Email *"
          type="email"
          placeholder="eg. john@doe.com"
          required
        />
        <Input value={subject} onChange={setSubject} label="Subject" />
        <InputLayout>
          <Label>Message *</Label>
          <TextArea
            cols="60"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></TextArea>
        </InputLayout>
        <Button disabled={isSending}>Submit</Button>
      </Form>
    </Section>
  );
};

export default ContactUs;
