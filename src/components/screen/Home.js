import React from 'react';
import HomeRouter from '../../routes/HomeRouter';
import HomeNavBar from '../home/HomeNavbar';

const Home = () => {
  return (
    <section>
      <HomeNavBar />
      <HomeRouter />
    </section>
  );
};

export default Home;
