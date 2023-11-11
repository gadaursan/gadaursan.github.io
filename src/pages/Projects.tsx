import React from 'react';

import '../components/Page.scss'

const Projects = () => {
  return (
    <React.Fragment>
      <h1>Projects</h1>
      <div className="content">
        <p>Here's some stuff that I've done outside of art and fics.</p>
        <h2>Coding Projects</h2>
        <ul>
          <li>
            <a href="https://gadaursan.github.io/AO3TweetBuilder/">
              Ao3 Tweet Builder
            </a> (2020) - Code-free tool to construct HTML for fake Tweets on Ao3 fics
          </li>
          <li>
            <a href="https://archiveofourown.org/works/22517134">
              Repository: Twitter
            </a> (2020) - Documentation for a CSS work skin on Ao3 to simulate fake Twitter posts
          </li>
          <li>
            <a href="https://archiveofourown.org/works/8631214">
              Repository
            </a> (2020-?) - Compilation of CSS work skins to use on Ao3
          </li>
        </ul>
        <h2>Fan Works Preservation</h2>
        <ul>
          <li>
            <a href="https://github.com/otwcode/open-doors-code">
              OTW Open Doors
            </a> (2021-2024) - Improved the code used to generate databases for prepare old fanfic archives to be imported into Archive of Our Own
          </li>
          <li>
            <a href="https://fanlore.org/wiki/User:Gadaursan">
              Zine Documentation on Fanlore
            </a> (2023-?) - Tracking and documenting the history of all zines and fan projects on Fanlore. Focused on Ace Attorney and Kingdom Hearts.
          </li>
        </ul>
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

export default Projects
