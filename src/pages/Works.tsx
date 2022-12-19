import React from 'react';
import '../components/Page.scss'

const Works = () => (
  <React.Fragment>
    <h1>List of Works</h1>
    <div className="content">
      <p>Some general list of things I've made.</p>

      <h3>Really old things</h3>
      <ul>
        <li>
          <a href="https://iasfuturekings.tumblr.com/">
            I As Future Kings
          </a> -
          An AU for <i>Fire Emblem Fates: Conquest</i>
        </li>
        <li>
          <a
            href="https://seminuzlockeph.tumblr.com/">
            Pokemon Black 2 Semi-Nuzlocke
          </a> -
          A very loose Nuzlocke run of <i>Pokemon Black 2</i>
        </li>
        <li>
          <a href="https://www.youtube.com/playlist?list=PLlUCISPLKaSmS6Oafbaku_9KMWV0tb8kB">
            Introduction to BTS
          </a> -
          A series of short video essays explaining each member of BTS
        </li>
      </ul>
    </div>
  </React.Fragment>
)
  

export default Works
