import React from 'react';
import '../components/Page.scss'

const Works = () => {
  return (
    <React.Fragment>
      <h1>Other Projects</h1>
      <div className='content'>
        <p className='description'>Other things I've made</p>
        <ul>
          <li>
            <a className='block' href="https://iasfuturekings.tumblr.com/">
              I As Future Kings
            </a> -
            A Tumblr Blog for my AU for <i>Fire Emblem Fates: Conquest</i>
          </li>
          <li>
            <a className='block' href="https://www.youtube.com/playlist?list=PLlUCISPLKaSmS6Oafbaku_9KMWV0tb8kB">
              Introduction to BTS
            </a> -
            A series of short video essays explaining each member of BTS
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}
  

export default Works
