import React, { useEffect, useState } from 'react';
import Loader from '../includes/Loader';
import NotFound from '../includes/NotFound';
import fetchApi from '../../api/fetchApi.js';

const Post = ({ match }) => {
  const id = match.params.id;
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const result = await fetchApi({ type: 'FETCH_POST', id }).catch(() => {});
      setPost(result);
      setIsLoading(false);
    };
    fetchPost();
  }, []);

  if (isLoading) return <Loader />;
  if (!post) return <NotFound />;

  return (
    <article>
      <h1>{post.title}</h1>
    </article>
  );
};

export default Post;
