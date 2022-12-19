import React from 'react';
import LinksOut from '../components/LinksOut';

import '../components/Page.scss'

const Home = () => {
  return (
    <React.Fragment>
      <h1 className='username'>gadaursan</h1>
      <div className="content">
        Hi. I write code, fics, and draw. Also I archive fandom things.
      </div>
      <LinksOut />
    </React.Fragment>
  );
}

export default Home
