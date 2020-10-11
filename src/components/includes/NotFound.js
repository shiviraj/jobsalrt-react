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
  @media only screen and (max-width: 420px) {
    & {
      font-size: 32px;
      height: 32vh;
    }
  }
`;

const NotFound = () => {
  return (
    <NotFoundLayout>
      Site is under development, we will implement this feature soon!
    </NotFoundLayout>
  );
};

export default NotFound;
