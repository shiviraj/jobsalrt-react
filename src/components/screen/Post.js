import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Loader from '../includes/Loader';
import NotFound from '../includes/NotFound';
import General from '../post/General';
import ImportantDates from '../post/ImportantDates';
import Table from '../post/Table';
import Array from '../post/Array';
import ImportantLinks from '../post/ImportantLinks';

const Post = ({ match }) => {
  const id = match.params.id;
  const [post, setPost] = useState(null);
  const isLoading = useFetch({ type: 'FETCH_POST', id }, setPost, id);

  if (isLoading) return <Loader />;
  if (!post) return <NotFound />;

  const { state, ...others } = post.others || {};
  console.log(post);
  return (
    <article>
      <General data={post.general} title={post.title} />
      <ImportantDates data={post.important_dates} />
      <Table data={post.application_fee} title="Application Fee" />
      <Table data={post.age_limit_details} title="Age Limit Details" />
      <Table data={post.vacancy_details} title="Vacancy Details" />
      {Object.keys(others).map((key) => {
        return (
          <Table key={key} data={others[key]} title={key.replace(/_/g, ' ')} />
        );
      })}
      <Array data={post.selection_process} title="Selection Process" />
      <Array data={post.how_to_apply} title="How To Apply" />
      <ImportantLinks data={post.important_links} />
    </article>
  );
};

export default Post;
