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
      <div className='buttonIconContainer'>
        <img
          className='buttonIcon'
          draggable={false}
          src={link.icon}
          alt={link.label}
        />
      </div>
      <div className='buttonLabel'>{link.label}</div>
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