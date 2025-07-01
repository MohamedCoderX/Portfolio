import React from 'react'
import Nav from './components/Nav'
import Banner from './components/Banner'

import ProjectsSection from './components/projectSection'
import AboutMePage from './components/AboutMePage'
import Contact from './components/Contact'
import Footer from './components/Footewr'

const App = () => {
  return (
    <div>
      <Nav/>
      <Banner/>
      <AboutMePage/>
      <ProjectsSection/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App