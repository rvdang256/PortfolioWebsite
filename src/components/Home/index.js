
import Resume from '../../assets/resume.pdf';
import { useState, useEffect } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['I',"'m",'', '',  'R','y', 'a', 'n']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    useEffect(() => {
         setTimeout(() => {
            return(
          setLetterClass('text-animate-hover')
          )
        }, 4000)
      }, [])
    return (
      <>
        <div className="container home-page">

            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                {/* <img src={LogoTitle} alt="developer" /> */}
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={12} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={12} />
                </h1>
                <h2>Penn State Graduate / Backend Developer / Machine Learning Engineer</h2>
                <a href={Resume} target = "_blank" className="flat-button" rel="noreferrer">RESUME</a>



            </div>

            <Logo />
            

        </div>
        <Loader type = 'pacman'/>
      </>


    )
}

export default Home