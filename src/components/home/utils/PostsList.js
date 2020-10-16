import React from 'react';
import moment from 'moment';
import { Row, Cell, Link, Table, InnerTable } from './Style';

const PostList = ({ posts }) => {
  return (
    <Table>
      {posts.map((post) => {
        return (
          <Row key={post._id}>
            <Cell>{post.general.company}</Cell>
            <Cell>{post.title}</Cell>
            <Cell>{moment(post.general.last_date).format('MMM DD, YYYY')}</Cell>
            <InnerTable>
              <Row>
                <Cell>{post.general.total_vacancies}</Cell>
                <Cell>{post.general.qualification_required}</Cell>
                <Cell>{post.general.location}</Cell>
              </Row>
            </InnerTable>
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
