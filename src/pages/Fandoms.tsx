import React from 'react';

import '../components/Page.scss'

import { FANDOMS } from './Page-DB';

const Fandoms = () => {
  const primes = FANDOMS
    .filter(fandom => fandom?.priority)
    .sort((a,b) => a.label.localeCompare(b.label))
  const seconds = FANDOMS
    .filter(fandom => fandom?.priority != true)
    .sort((a,b) => a.label.localeCompare(b.label))

  return (
    <React.Fragment>
      <h1>Fandoms</h1>
      <div className="content">
        <p>
          If you don't really like these, I don't think we'll get along very well.
        </p>
        <h3>Primary</h3>
        <ul className='primary'>
          {primes.map(fandom =>
            <li key='fandom.label'>
              {fandom.label}
            </li>
          )}
        </ul>
        <h3>Secondary</h3>
        <ul className='columns'>
          {seconds.map(fandom =>
            <li key='fandom.label'>
              {fandom.label}
            </li>
          )}
        </ul>
        <p>...and many others! I'm just lazy and didn't feel like listing them all.</p>
      </div>
    </React.Fragment>
  );
}

export default Fandoms
