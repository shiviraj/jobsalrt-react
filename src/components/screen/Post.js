import React, { useEffect, useState } from 'react';
import Loader from '../includes/Loader';
import NotFound from '../includes/NotFound';
import fetchApi from '../../api/fetchApi.js';
import General from '../post/General';
import ImportantDates from '../post/ImportantDates';
import Table from '../post/Table';
import Array from '../post/Array';
import ImportantLinks from '../post/ImportantLinks';

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
  }, [id]);

  if (isLoading) return <Loader />;
  if (!post) return <NotFound />;

  return (
    <article>
      <General data={post.general} title={post.title} />
      <ImportantDates data={post.important_dates} />
      <Table data={post.application_fee} title="Application Fee" />
      <Table data={post.age_limit_details} title="Age Limit Details" />
      <Table data={post.vacancy_details} title="Vacancy Details" />
      <Array data={post.selection_process} title="Selection Process" />
      <Array data={post.how_to_apply} title="How To Apply" />
      <ImportantLinks data={post.important_links} />
    </article>
  );
};

export default Post;
