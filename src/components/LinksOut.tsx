import React from 'react'

import './LinksOut.scss'
import {OUTLINKS} from '../pages/Page-DB'

interface ILinksOut {
  isTruncated?: boolean
}

const LinksOut:React.FC<ILinksOut> = ({
  isTruncated = false,
}) => {
  const filteredLinks = isTruncated ? OUTLINKS.filter((link) => link.priority === true) : OUTLINKS
  const renderedLinks = filteredLinks.map((link) =>
  <a
    href={link.to}
    key={link.to}
    target='_blank'
    rel='noopener'
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
      {renderedLinks}
    </div>
  )
}

export default LinksOut