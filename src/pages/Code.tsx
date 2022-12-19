import React from 'react';

import '../components/Page.scss'

const CodingProjects = () => {
  return (
    <React.Fragment>
      <h1>Coding Projects</h1>
      <div className="content">
        <p>Below are some coding projects I've made.</p>
        <ul>
          <li>
            <a href="https://gadaursan.github.io/AO3TweetBuilder/">
              Ao3 Tweet Builder
            </a> - Code-free tool to construct HTML for fake Tweets on Ao3 fics
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default CodingProjects
