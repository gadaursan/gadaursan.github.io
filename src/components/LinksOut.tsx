import React from 'react'

import './LinksOut.scss'
import {OUTLINKS} from '../pages/Page-DB'

const LinksOut = () => {
  const links = OUTLINKS.map((link) =>
  <a
    href={link.to}
    key={link.to}
    target='_blank'
  >
    <div className='button'>
      <img
        className='buttonIcon'
        src={link.icon}
        alt={link.label}
      />
    </div>
  </a>
  )

  return (
    <div className="linksOut">
      {links}
    </div>
  )
}

export default LinksOut