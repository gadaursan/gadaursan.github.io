
import Home from './Home'
import Fandoms from './Fandoms'
import Works from './Works'
import CodingProjects from './Code'
import {ICONS} from '../static/Icons'

const PAGES = [
  {
    to: '/',
    label: 'Home',
    component: <Home />
  },
  {
    isNavbar: true,
    to: '/fandoms',
    label: 'Fandoms',
    component: <Fandoms />
  },
  {
    isNavbar: true,
    to: '/code',
    label: 'Code',
    component: <CodingProjects />
  },
  {
    isNavbar: true,
    to: '/works',
    label: 'Works',
    component: <Works />
  },
]

const OUTLINKS = [
  {
    label: 'AO3',
    to: 'https://archiveofourown.org/users/gadaursan',
    icon: ICONS.ao3
  },
  {
    label: 'Tumblr',
    to: 'https://gadaursan.tumblr.com/',
    icon: ICONS.tumblr
  }
]

export {PAGES, OUTLINKS}