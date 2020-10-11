import React, { useState, useEffect } from 'react';
import Loader from '../includes/Loader';
import styled from 'styled-components';
import fetchApi from '../../api/fetchApi';

const Section = styled.section`
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
  border: 1px solid #0c4da2;
  margin: 32px;
  @media only screen and (max-width: 420px) {
    & {
      margin: 8px 4px;
    }
  }
`;

const Title = styled.h1`
  color: #fff;
  background: #0c4da2ef;
  padding: 4px 32px;
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

const AllJobs = (props) => {
  const type = props.location.pathname.slice(1).replace('-', '_').toUpperCase();
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchApi({ type })
      .then((result) => {
        setPosts(result);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [type]);

  if (isLoading) return <Loader />;

  return (
    <Section>
      <Title>{type.replace('_', ' ')}</Title>
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
