import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

import { TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { Table, Link } from '@material-ui/core';
import useStyles from './Style';

const Links = ({ text, prefix }) => {
  const classes = useStyles();
  const links = (text && text.split(',')) || [];
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            component={NavLink}
            key={link}
            to={`${prefix}/${link.trim().replace(/ /g, '-')}`}
            className={classes.link}
          >
            {link.trim()},
          </Link>
        );
      })}
    </>
  );
};

const PostList = ({ posts }) => {
  const classes = useStyles();
  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Company</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Last Date</TableCell>
          <TableCell className="small">Vacancies</TableCell>
          <TableCell className="small">Qualification</TableCell>
          <TableCell className="small">Location</TableCell>
          <TableCell>View</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {posts.map((post) => {
          return (
            <TableRow key={post._id}>
              <TableCell>
                <Links
                  text={post.general.company.replace(/\(.*\)/g, '')}
                  prefix="/home/company"
                />
              </TableCell>
              <TableCell>
                <Link component={NavLink} to={`/post/${post.url}`}>
                  {post.title}
                </Link>
              </TableCell>
              <TableCell>
                {moment(post.general.last_date).format('MMM DD, YYYY')}
              </TableCell>
              <TableCell className="small">
                {post.general.total_vacancies}
              </TableCell>
              <TableCell className="small">
                <Links
                  text={post.general.qualification_required}
                  prefix="/home/qualification"
                />
              </TableCell>
              <TableCell className="small">
                <Links text={post.general.location} prefix="/home/location" />
              </TableCell>
              <TableCell>
                <Link component={NavLink} to={`/post/${post.url}`}>
                  View
                </Link>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default PostList;
