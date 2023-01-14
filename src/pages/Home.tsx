import React from 'react';
import LinksOut from '../components/LinksOut';

import '../components/Page.scss'

const Home = () => {
  return (
    <React.Fragment>
      <div className='username'>this is <span>gadaursan</span></div>
      <div className="content">
        Hi. I code, write, and draw. Also I archive fandom things.
      </div>
      <LinksOut />
    </React.Fragment>
  );
}

export default Home
