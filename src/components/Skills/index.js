import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import './index.scss'
import WordCloud from '../WorldCloud'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's', '', 'a', 'n', 'd', '', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={8}
            />
          </h1>
          <p>
            I'm a very ambitious computer science student looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet, confident, naturally curious, and perpetually working on
            improving my skills one problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, a soccer fanatic, fitness enthusiast, and tech-obsessed!
          </p>
        </div>

      
        

        <WordCloud/>
      </div>
      
      <Loader type="pacman" color/>
    </>
  )
}

export default Skills