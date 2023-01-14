import React from 'react';
import '../components/Page.scss'

const Works = () => {
  return (
    <React.Fragment>
      <h1>Other Projects</h1>
      <div className='content'>
        <p className='description'>List of things I've worked on that don't fit anywhere else.</p>
        <h2>Zines / Collabs</h2>
        <ul>
          <li>
            <a className='block' href="https://fanlore.org/wiki/The_World_Around_Us">
              The World Around Us
            </a> (2016) -
            Contributed art for a zine featuring <i>Fire Emblem Fates</i> characters in different cultural settings around the world
          </li>
          <li>
            <a className='block' href="https://gadaursan.tumblr.com/post/164689818576">
              Fire Emblem Compendium
            </a> (2017) -
            Drew an entry for Daniela from <i>Fire Emblem Fates: Birthright</i>
          </li>
        </ul>
        <h2>Mixed Media</h2>
        <ul>
          <li>
            <a className='block' href="https://iasfuturekings.tumblr.com/">
              I As Future Kings
            </a> (2016-?) -
            A Tumblr Blog for my AU for <i>Fire Emblem Fates: Conquest</i>
          </li>
          <li>
            <a className='block' href="https://www.youtube.com/playlist?list=PLlUCISPLKaSmS6Oafbaku_9KMWV0tb8kB">
              Introduction to BTS
            </a> (2018) -
            A series of short video essays explaining each member of BTS
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}
  

export default Works
