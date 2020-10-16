import React, { useState, useEffect } from 'react';
import Links from './utils/Links';
import Loader from '../includes/Loader';
import fetchApi from '../../api/fetchApi';
import PostsList from './utils/PostsList';
import { Section, Title } from './utils/Style';

const Locations = (props) => {
  const [locations, setLocations] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchApi({ type: 'GET_LOCATIONS' })
      .then((result) => setLocations(result))
      .catch(() => {});
  }, []);

  const location =
    props.location.pathname.split('/')[3] || 'All India / Central Govt';
  useEffect(() => {
    fetchApi({ type: 'FETCH_POSTS_BY_LOCATION', location })
      .then((result) => {
        setPosts(result);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [location]);

  const createLink = (item) => {
    item = item.trim();
    let link = '/' + item.replace(/ /g, '-');
    if (item === 'All India / Central Govt') link = '';
    return `/home/location${link}`;
  };

  return (
    <Section>
      <Title>Location Wise Posts</Title>
      {locations ? <Links list={locations} getLink={createLink} /> : <Loader />}
      <Title>
        {location ? location.replace(/-/g, ' ') : 'All India / Central Govt'}
      </Title>
      {isLoading ? <Loader /> : <PostsList posts={posts} />}
    </Section>
  );
};

export default Locations;
