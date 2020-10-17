import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { Row, Cell, Table } from './Style';

const PostList = ({ posts }) => {
  return (
    <Table>
      <thead>
        <Row>
          <Cell>Company</Cell>
          <Cell>Title</Cell>
          <Cell>Last Date</Cell>
          <Cell className="small">Vacancies</Cell>
          <Cell className="small">Qualification</Cell>
          <Cell className="small">Location</Cell>
          <Cell>View</Cell>
        </Row>
      </thead>
      <tbody>
        {posts.map((post) => {
          return (
            <Row key={post._id}>
              <Cell>{post.general.company.replace(/\(.*\)/g, '')}</Cell>
              <Cell>{post.title}</Cell>
              <Cell>
                {moment(post.general.last_date).format('MMM DD, YYYY')}
              </Cell>
              <Cell className="small">{post.general.total_vacancies}</Cell>
              <Cell className="small">
                {post.general.qualification_required}
              </Cell>
              <Cell className="small">{post.general.location}</Cell>
              <Cell>
                <NavLink to={`/post/${post._id}`}>View</NavLink>
              </Cell>
            </Row>
          );
        })}
      </tbody>
    </Table>
  );
};

export default PostList;
