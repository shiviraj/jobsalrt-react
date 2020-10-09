import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin: 16px;
`;

const LoaderAnimation = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

const LoaderLayout = styled.div`
  display: block;
  height: 3.4rem;
  width: 3.4rem;
  border-radius: 50%;
  border: 4px solid #0c4da2;
  border-bottom-color: #fff;
  animation: ${LoaderAnimation} 1.5s infinite linear;
`;

const Loader = (props) => (
  <LoaderContainer>
    <LoaderLayout />
  </LoaderContainer>
);

export default Loader;
