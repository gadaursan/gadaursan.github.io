
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

const FANDOMS = [
  {label: 'Ace Attorney', priority: true},
  {label: 'Final Fantasy XIV', priority: true,},
  {label: 'The Great Ace Attorney', priority: true},
  {label: 'Kingdom Hearts', priority: true},
  {label: 'Acca 13'},
  {label: 'Avatar: The Last Airbender'},
  {label: 'Black Butler'},
  {label: 'Batman and the Bat Family'},
  {label: 'Delicious in Dungeon'},
  {label: 'Code Geass'},
  {label: 'Detective Lupin'},
  {label: 'Fire Emblem: Fates'},
  {label: 'Fire Emblem: Awakening'},
  {label: 'Pokemon'},
  {label: 'Gundam'},
  {label: 'Free!'},
  {label: 'Yuri on Ice!'},
  {label: 'Yu-Gi-Oh 5Ds'},
  {label: 'Yu-Gi-Oh VRAINs'},
  {label: 'Promare'},
  {label: 'Hunter x Hunter'},
  {label: 'Mawaru Penguindrum'},
  {label: 'Reborn!'},
  {label: 'Parks and Recreation'},
  {label: 'How to Train Your Dragon'},
  {label: 'Hoshiai no Sora'},
  {label: 'Fullmetal Alchemist'},
]

export {PAGES, OUTLINKS, FANDOMS}