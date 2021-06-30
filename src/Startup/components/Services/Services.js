import React from 'react'

import classes from './Services.module.css'
import Service from './Service/Service'

const Services = props => {
    return (
        <div className={classes.servicesContainer}>
            <div className={classes.servicesHeading}>We Provide World Class Services and Digital products</div>
            <div className={classes.servicesLine}></div>
            <div className={classes.servicesDescription}>
                Our complete spectrum of web solutions help startups and organizations to create outcome-focused solutions with enhanced agility that help them to rapidly reshape, renew and build new capabilities for their business. Our differentiated and personalized services arm brands with the right tools, technologies and quality processes so as to maximize value from IT investments.
            </div>
            <Service />
        </div>
    )
}

export default Services