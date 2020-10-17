import React, { useState, useEffect } from 'react';
import Links from './utils/Links';
import Loader from '../includes/Loader';
import fetchApi from '../../api/fetchApi';
import PostsList from './utils/PostsList';
import { Section, Title } from './utils/Style';

const JobsBy = (props) => {
  const [, , name, jobsBy] = props.location.pathname.split('/');

  const [list, setList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchApi({ type: 'GET_LIST', payload: { name } })
      .then((result) => setList(result))
      .catch(() => {});
  }, [name]);

  useEffect(() => {
    setIsLoading(true);
    fetchApi({ type: 'FETCH_POSTS_BY', payload: { name, jobsBy } })
      .then((result) => {
        setPosts(result);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [name, jobsBy]);

  const createLink = (item) => {
    return `/home/${name}/${item.trim().replace(/ /g, '-')}`;
  };

  return (
    <Section>
      <Title>{name} Wise Posts</Title>
      {list ? <Links list={list} getLink={createLink} /> : <Loader />}
      <Title>{jobsBy ? jobsBy.replace(/-/g, ' ') : 'All'}</Title>
      {isLoading ? <Loader /> : <PostsList posts={posts} />}
    </Section>
  );
};

export default JobsBy;
