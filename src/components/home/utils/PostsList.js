import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { Row, Cell, Table } from './Style';

const Links = ({ text, prefix }) => {
  const links = (text && text.split(',')) || [];
  return (
    <>
      {links.map((link) => {
        return (
          <NavLink
            key={link}
            to={`${prefix}/${link.trim().replace(/ /g, '-')}`}
          >
            {link.trim()}
          </NavLink>
        );
      })}
    </>
  );
};

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
              <Cell>
                <Links
                  text={post.general.company.replace(/\(.*\)/g, '')}
                  prefix="/home/company"
                />
              </Cell>
              <Cell>
                <NavLink to={`/post/${post.url}`}>{post.title}</NavLink>
              </Cell>
              <Cell>
                {moment(post.general.last_date).format('MMM DD, YYYY')}
              </Cell>
              <Cell className="small">{post.general.total_vacancies}</Cell>
              <Cell className="small">
                <Links
                  text={post.general.qualification_required}
                  prefix="/home/qualification"
                />
              </Cell>
              <Cell className="small">
                <Links text={post.general.location} prefix="/home/location" />
              </Cell>
              <Cell>
                <NavLink to={`/post/${post.url}`}>View</NavLink>
              </Cell>
            </Row>
          );
        })}
      </tbody>
    </Table>
  );
};

export default PostList;
