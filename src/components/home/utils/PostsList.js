import React from 'react';
import moment from 'moment';
import { Row, Cell, Link, Table } from './Style';

const PostList = ({ posts }) => {
  return (
    <Table>
      {posts.map((post) => {
        return (
          <Row key={post._id}>
            <Cell>{post.general.company.replace(/\(.*\)/g, '')}</Cell>
            <Cell>{post.title}</Cell>
            <Cell>{moment(post.general.last_date).format('MMM DD, YYYY')}</Cell>
            <Cell className="small">{post.general.total_vacancies}</Cell>
            <Cell className="small">{post.general.qualification_required}</Cell>
            <Cell className="small">{post.general.location}</Cell>
            <Cell>
              <Link href={`/post/${post._id}`}>View</Link>
            </Cell>
          </Row>
        );
      })}
    </Table>
  );
};

export default PostList;
