import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import './Startup.css'
import Banner from '../components/Banner/Banner'
import Services from '../components/Services/Services'
import Approach from '../components/Approach/Approach'
import Register from '../components/Register/Register'
import Contact from '../components/Contact/Contact'

const Startup = props => {
    return (
        <div className="Startupcontainer">
            <a
                href="https://wa.me/+917358557933"
                className="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon className="whatsapp-icon" icon={faWhatsapp} />
            </a>
            <Banner />
            <Services />
            <Approach />
            <Register />
            <Contact />
        </div>
    )
}

export default Startup