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
              strArray={['S', 'k', 'i', 'l', 'l', 's', '', '&', '', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={8}
            />
          </h1>
          <p>
            I am experinced with a wide range of programming languages and tech stacks inlduing but 
            not limited to Python, React, CSS, HTML, Java, R, C, JavaScript, SQL, Git, TensorFlow.
          </p>
          <p align="LEFT">
            
          I have worked as an IT intern at the Applied Research Laboratory at Penn State where I was responsible for managing
          the IT infrastructure and providing technical support to the research staff. This includes handling maintence of the
          the different Atlassain tools, creating new macros JIRA and Confluence, and updating the knowledge base.
          
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