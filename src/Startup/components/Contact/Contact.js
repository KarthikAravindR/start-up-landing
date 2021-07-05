import React from 'react'

import classes from './Contact.module.css'

const Contact = props => {
    return(
        <div className={classes.ContactContainer} id='Contact'>
            <div>
                <h4>Start-up-Consultant in Chennai</h4>
                <p>mohanraj1302@gmail.com</p>
                <p>+917358557933</p>
            </div>
            <div className={classes.socialMedia}>
                <p>LinkedIn</p>
                <p>Facebook</p>
                <p>Twitter</p>
            </div>
        </div>
    )
}

export default Contact