import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchApi from '../../api/fetchApi';
import { Recently, Section, Title, RecentLink } from './utils/Style';
import Loader from '../includes/Loader';

const RecentPosts = () => {
  const [added, setAdded] = useState([]);
  const [modified, setModified] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchApi({ type: 'RECENT_POSTS' })
      .then((result) => {
        setAdded(result.added);
        setModified(result.modified);
        setIsLoading(false);
      })
      .catch((error) => setIsLoading(false));
  }, []);
  return (
    <Recently>
      <Section>
        <Title>Recently Added</Title>
        {isLoading ? (
          <Loader />
        ) : (
          added.map((item) => {
            return (
              <RecentLink key={item._id}>
                <Link to={`/post/${item._id}`}>{item.title}</Link>
              </RecentLink>
            );
          })
        )}
      </Section>
      <Section>
        <Title>Recently Modified</Title>
        {isLoading ? (
          <Loader />
        ) : (
          modified.map((item) => {
            return (
              <RecentLink key={item._id}>
                <Link to={`/post/${item._id}`}>{item.title}</Link>
              </RecentLink>
            );
          })
        )}
      </Section>
    </Recently>
  );
};

export default RecentPosts;
