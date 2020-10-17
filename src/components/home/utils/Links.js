import React from 'react';
import { Layout, Link } from './Style';

const Links = ({ list, getLink }) => {
  return (
    <Layout>
      <Link href={getLink('')}>All</Link>
      {list.map((item) => {
        return (
          <Link key={item} href={getLink(item)}>
            {item}
          </Link>
        );
      })}
    </Layout>
  );
};

export default Links;
