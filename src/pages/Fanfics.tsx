import React from 'react';
import '../components/Page.scss'
import { ICONS } from '../static/Icons';
import {Categories, WORKS } from './Fics-DB';
import {IFic} from './Fics-DB'

const FanficBlock = ({work}:{work: IFic}) => (
  <div className='fanfic'>
    <div className='title'>
      <a
        rel='noreferrer'
        target='_blank'
        href={`https://archiveofourown.org/works/${work.id}`}
      >
        {work.title}
      </a>
      &nbsp;({work.year})
      {work.locked && <img alt='lock' draggable={false} src={ICONS.lock} />}
    </div>
    <p className='fandom'>{work.fandom.map(f => f).join(', ')}</p>
    <p><span>Ships:</span> {work.ships}</p>
    <p><span>Tags:</span> {work.tags}</p>
    <p>{work.summary}</p>
    {work.series &&
      <p className='series'><span>Part of</span> <a href={`https://archiveofourown.org/series/${work.series[1]}`}>{work.series[0]}</a></p>
    }
  </div>
)

const FanficFilter = ({category}:{category?: string}) => {
  let works

  if (!category) {
    works = WORKS.filter((work) => {
      const intersect = work.fandom.filter(n => {
        return Object.values(Categories).indexOf(n) !== -1
      })
      return intersect.length === 0
    })
  } else {
    works = WORKS.filter((work) => work.fandom.includes(category))
  }

  return (
    <div className='fanfics'>
      {works.map(work =>
        <FanficBlock key={work.title} work={work} />
      )}
    </div>
  )
}

const Fanfics = () => {
  return (
    <React.Fragment>
      <h1>Fanfiction</h1>
      <div className="content">
        <p>A list of fics I've written on Ao3 under this pseudonym. Some fics are archived locked and require an Ao3 account to access, so they will be indicated with a locked icon.</p>
        <h2>{Categories.DGS}</h2>
        <FanficFilter category={Categories.DGS} />
        <h2>{Categories.FE14}</h2>
        <FanficFilter category={Categories.FE14} />
        <h2>{Categories.YGOVR}</h2>
        <FanficFilter category={Categories.YGOVR} />
        <h2>{Categories.BNHA}</h2>     
        <FanficFilter category={Categories.BNHA} />
        <h2>Other</h2>     
        <FanficFilter />   
      </div>
    </React.Fragment>
  )
}
  

export default Fanfics
