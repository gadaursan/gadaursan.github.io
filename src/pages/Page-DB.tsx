
import Home from './Home'
import Fandoms from './Fandoms'
import Works from './Works'
import CodingProjects from './Code'
import Fanfics from './Fanfics'
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
    to: '/fanfic',
    label: 'Fanfics',
    component: <Fanfics />
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
    label: 'Other',
    component: <Works />
  },
]

const OUTLINKS = [
  {
    label: 'Archive of Our Own',
    to: 'https://archiveofourown.org/users/gadaursan',
    icon: ICONS.pen,
  },
  {
    label: 'Tumblr (Art Pre-2021)',
    to: 'https://gadaursan.tumblr.com/',
    icon: ICONS.tumblr,
  },
  {
    label: 'Tumblr (Blog)',
    to: 'https://phantom-dare.tumblr.com/',
    icon: ICONS.tumblr,
  },
  {
    label: 'Twitter/X',
    to: 'https://twitter.com/minjonettes',
    icon: ICONS.twitter,
  },
  {
    label: 'Fanlore',
    to: 'https://fanlore.org/wiki/User:Gadaursan',
    icon: ICONS.magnifying_glass,
  }
]

const FANDOMS = [
  {label: 'Final Fantasy XIV', priority: true,},
  {label: 'The Great Ace Attorney', priority: true},
  {label: 'Kingdom Hearts'},
  {label: 'Ace Attorney', priority: true},
  {label: 'Acca 13'},
  {label: 'Avatar: The Last Airbender'},
  {label: 'Black Butler'},
  {label: 'DC Comics'},
  {label: 'Delicious in Dungeon'},
  {label: 'Detective Conan', priority: true},
  {label: 'D.Gray-Man'},
  {label: 'Code Geass'},
  {label: 'Fire Emblem: Fates'},
  {label: 'Fire Emblem: Awakening'},
  {label: 'Gundam'},
  {label: 'Yuri on Ice!'},
  {label: 'Yu-Gi-Oh 5Ds'},
  {label: 'Yu-Gi-Oh VRAINs'},
  {label: 'Promare'},
  {label: 'Reborn!'},
  {label: 'Spy x Family'},
  {label: 'Fullmetal Alchemist'},
]

export {PAGES, OUTLINKS, FANDOMS}