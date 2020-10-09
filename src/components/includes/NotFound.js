import React from 'react';
import styled from 'styled-components';

const NotFoundLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 60vh;
  justify-content: center;
  text-align: center;
  font-size: 60px;
  opacity: 0.7;
  color: #f00;
`;

const NotFound = () => {
  return <NotFoundLayout>Oops! 404 Not Found</NotFoundLayout>;
};

export default NotFound;
