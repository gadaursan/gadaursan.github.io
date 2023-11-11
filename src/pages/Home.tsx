import React from 'react';
import LinksOut from '../components/LinksOut';

import '../components/Page.scss'

const Home = () => {
  return (
    <React.Fragment>
      <div className='username'>this is <span>gadaursan</span></div>
      <div className="content">
        <p>Hi. I code, write, and draw. Also I archive fandom things.</p>
      </div>
      <LinksOut isTruncated/>
    </React.Fragment>
  );
}

export default Home
