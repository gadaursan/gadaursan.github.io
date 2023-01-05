import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom'
import {
  CSSTransition, SwitchTransition
} from 'react-transition-group'

import './App.scss';
import {PAGES} from './pages/Page-DB';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

const App = () => {
  const location = useLocation()
  const nodeRef = React.useRef(null)
  const routes = PAGES.map(page => (
    <Route
      path={page.to}
      element={page.component}
      key={page.label}
    />
  ))

  return (
    <div className="App">
      <Navbar/>
      <SwitchTransition>
        <CSSTransition
          nodeRef={nodeRef}
          key={location.pathname}
          classNames="fade"
          timeout={300}
        >
          <div className="page" ref={nodeRef}>
            <Routes location={location}>
              {routes}
            </Routes>
            <Footer />
          </div>
        </CSSTransition>
      </SwitchTransition>     
    </div>
  )
}

export default App
