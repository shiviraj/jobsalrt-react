import { NavLink } from 'react-router-dom';
import React from 'react';

import { Layout } from './Style';

const Links = ({ list, getLink }) => {
  return (
    <Layout>
      <NavLink to={getLink('')} activeClassName="active" exact>
        All
      </NavLink>
      {list.map((item) => {
        return (
          <NavLink key={item} to={getLink(item)} activeClassName="active">
            {item}
          </NavLink>
        );
      })}
    </Layout>
  );
};

export default Links;
