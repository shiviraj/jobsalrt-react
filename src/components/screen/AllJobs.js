import React, { useState } from 'react';
import Loader from '../includes/Loader';
import useFetch from '../../hooks/useFetch';
import styled from 'styled-components';

const Section = styled.section`
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
  border: 1px solid #0c4da2;
  margin: 32px;
`;

const Title = styled.h1`
  color: #fff;
  background: #0c4da2ef;
  padding: 4px;
  font-weight: 500;
  border: 1px solid #0c4da2;
`;

const List = styled.ul`
  padding: 4px 32px;
  background: #efefef;
`;
const ListItem = styled.li`
  padding: 4px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #0c4da2;
  &:hover {
    text-decoration: underline;
  }
`;

const AllJobs = () => {
  const [posts, setPosts] = useState(null);
  const isLoading = useFetch({ type: 'ALL_JOBS' }, setPosts);

  if (isLoading) return <Loader />;

  return (
    <Section>
      <Title>All Jobs</Title>
      <List>
        {posts &&
          posts.map((post) => {
            return (
              <ListItem key={post._id}>
                <Link href={`/post/${post._id}`}>{post.title}</Link>
              </ListItem>
            );
          })}
      </List>
    </Section>
  );
};

export default AllJobs;
