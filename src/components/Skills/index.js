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
            I have created many side projects in my free time to learn new technologies and to improve my skills. Some of these projects
            are a <a href='https://rhythmic-rights.vercel.app/' target='_blank' rel='noreferrer'>Audio Minting NFT</a> website, an 
            <a href='https://github.com/rvdang256/Article-Of-Clothing-Classifier' target='_blank' rel='noreferrer'>Article of Clothing Classifier</a> , 
            and a <a href='https://fitnessjourney-3h4rcrtye-ryan-dangs-projects.vercel.app/' target='_blank' rel='noreferrer'>Calorie Tracker</a>website. To see more of my projects, please
            visit my <a href='https://github.com/rvdang256' target='_blank' rel='noreferrer'>GitHub</a> page.
          </p>
        </div>

      
        

        <WordCloud/>
        
      </div>
      
      <Loader type="pacman" color/>
    </>
  )
}

export default Skills