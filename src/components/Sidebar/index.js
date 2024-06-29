import'./index.scss';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className="nav-bar">
        
        <nav>

            <NavLink exact = 'true' activeClassName = "active" to = '/'>
                <FontAwesomeIcon icon = {faHome} color = "#4d4d4e"/>
            </NavLink>

            <NavLink exact = 'true' activeClassName = "active" className="about-link" to = '/about'>
                <FontAwesomeIcon icon = {faUser} color = "#4d4d4e"/>
            </NavLink>

            <NavLink exact = 'true' activeClassName = "active" className = "skills-link" to = '/skills'>
                <FontAwesomeIcon icon = {faGear} color = "#4d4d4e"/>
            </NavLink>

            <NavLink exact = 'true' activeClassName = "active" className = "portfolio-link" to = '/portfolio'>
                <FontAwesomeIcon icon = {faSuitcase} color = "#4d4d4e"/>
            </NavLink>


        </nav>
        <ul>
            <li>
                <a
                    target='blank'
                    rel='noreferer'
                    href='https://www.linkedin.com/in/ryanvandang/'
                >

                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>

            </li>

            <li>
                <a
                    target='blank'
                    rel='noreferer'
                    href='https://github.com/rvdang256'
                >

                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>

            </li>

        </ul>


    </div>



)

export default Sidebar;