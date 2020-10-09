import React, { useEffect, useState } from 'react';
import Loader from '../includes/Loader';
import NotFound from '../includes/NotFound';
import fetchApi from '../../api/fetchApi.js';
import styled from 'styled-components';
import General from '../post/General';

const PostArticle = styled.article`
  margin: 32px;
  border: 1px solid #0c4da2;
`;

const PostTitle = styled.h1`
  text-align: center;
  color: #fff;
  background: #0c4da2ef;
  padding: 4px;
  font-weight: 500;
`;

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
    <PostArticle>
      <PostTitle>{post.title}</PostTitle>
      <General data={post.general} />
    </PostArticle>
  );
};

export default Post;
