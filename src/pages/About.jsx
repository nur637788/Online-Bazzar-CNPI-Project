import React from 'react'
import AboutStats from '../components/AboutPage/AboutStats'
import AboutHero from '../components/AboutPage/AboutHero'
import Testimonials from '../components/AboutPage/Testimonials'

function About() {
  return (
    <div className='w-full'>
      <AboutHero />
      <Testimonials />
      <AboutStats />
    </div>
  )
}

export default About
