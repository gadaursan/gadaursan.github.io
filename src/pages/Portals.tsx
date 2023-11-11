import React from 'react';
import '../components/Page.scss'
import LinksOut from '../components/LinksOut';

const Portals = () => {
  return (
    <React.Fragment>
      <h1>Useful Links</h1>
      <div className='content small'>
        <h2></h2>
        <p className='description'>
          Trying to keep in touch? Here's where to find me! Just for following though, I'm not much of a talker.
        </p>
      </div>
      <LinksOut/>
    </React.Fragment>
  )
}
  

export default Portals
