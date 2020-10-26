import React from 'react';
import PostsList from '../home/utils/PostsList';
import styled from 'styled-components';

const Section = styled.section`
  border: 1px solid #0c4da2;
  margin: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 420px) {
    & {
      margin: 8px 4px;
    }
  }
`;

const Title = styled.h1`
  background: #0c4da2;
  color: #fff;
  padding: 4px 16px;
  width: 100%;
  font-weight: 500;
  text-transform: capitalize;
`;

const SearchResult = ({ posts, value }) => {
  return (
    <Section>
      <Title>Search: {value}</Title>
      {posts && <PostsList posts={posts} />}
    </Section>
  );
};

export default SearchResult;
