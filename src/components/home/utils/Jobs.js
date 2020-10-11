import React, { useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import Loader from '../../includes/Loader';
import styled from 'styled-components';

const Section = styled.section`
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
  border: 1px solid #0c4da2;
  margin: 8px;
  width: 32%;
  background: #efefef;
`;

const Title = styled.h1`
  color: #fff;
  background: #0c4da2;
  padding: 4px;
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  border: 1px solid #0c4da2;
`;

const List = styled.ul`
  padding: 4px 32px;
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

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 16px 8px 0;
`;

const ViewMore = styled.a`
  text-decoration: none;
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  background: #0c4df9;
  transition: all 0.2s;
  &:hover {
    margin-right: 8px;
  }
`;

const Jobs = ({ title }) => {
  const [posts, setPosts] = useState(null);
  const type = title.replace(' ', '_').toUpperCase();
  const isLoading = useFetch({ type }, setPosts);

  if (isLoading) return <Loader />;

  return (
    <Section>
      <Title>{title}</Title>
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
      <Footer>
        <ViewMore href={title.replace(' ', '-').toLowerCase()}>
          View more
        </ViewMore>
      </Footer>
    </Section>
  );
};

export default Jobs;
