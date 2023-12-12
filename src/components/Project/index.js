import React, { useEffect, useState } from 'react'
import Carousel from '../Carousal/index.js'
import AnimatedLetters from '../AnimatedLetters/index.js' // Adjust the path based on your project structure
import './index.scss'
import Portfolio from '../../assets/images/SidePic.svg'
import Loader from 'react-loaders'

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const wordArray = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's', ' ','M', 'a', 'd', 'e', ' ', 'S', 'o',' ', 'F', 'a', 'r']
  const portfolio = [
    {
      title: 'Kritarth Website',
      description:
        'Built a front end website for my university event named Kritarth under tight time constraints',
      link: 'kritarth.kiit.ac.in',
    },
    {
      title: 'Password Cracking',
      description:
        'Using BlackCat learnt to crack codes and became really efficient with linux',
    },
    {
      title: 'Encryption',
      description:
        'Have been writing C++ codes for several different kinds of encryptions being used in day to day life',
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timer) // This is the cleanup function
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={wordArray}
              idx={15}
            />
          </h1>
          <>
            <div className="portfolio-container">
              <div className="carousel-container">
                <Carousel projects={portfolio} className="carousal"/>
              </div>
              <div className="port-hero">
                <img src={Portfolio} alt="portfolio" className="port-hero" />
              </div>
            </div>
            
          </>
        </div>
        <Loader type="pacman" />
    </>
  )
}

export default Project
