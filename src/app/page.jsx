import AboutMe from '@/components/AboutMe'
import Education from '@/components/Education'
import Footer from '@/components/Footer'
import GetInTouch from '@/components/GetInTouch'
import Header from '@/components/Header'
import MenuBar from '@/components/MenuBar'
import OpenSource from '@/components/OpenSource'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import React from 'react'

const Home = () => {
  return (
    <div className='relative min-h-screen'>
      <Header />
      <AboutMe />
      <Education />
      <Skills />
      <OpenSource />
      <Projects />
      <GetInTouch />
      <Footer />
      <MenuBar />
    </div>
  )
}

export default Home