import React from 'react'

import classes from './Approach.module.css'
import design from '../../../assets/images/design.jpg'
import development1 from '../../../assets/images/development1.jpg'
// import development2 from '../../../assets/images/development2.jpg'
import research from '../../../assets/images/research.jpg'
import testing from '../../../assets/images/testing.jpg'
import wireframe from '../../../assets/images/wireframe.jpg'

const Approach = props => {
    return (
            <div className={classes.approachContainer} id='Approach'>
                <div className={classes.approachHeading}>Offering Best In Class Business Startup Consulting Services</div>
                <div className={classes.approachDescription}>
                    The Beginner's Unique Approach For Perfect Business Startup Consulting Services
                </div>
                <div className={classes.approachWaysContainer}>
                    <div className={classes.approachWays}>
                        <div className={classes.approachWayselements}>
                            <div className={classes.approachWaysImageDiv}><img src={research} alt="" loading="lazy" /></div>
                        </div>
                        <div className={classes.approachWayselements}>
                            <div>01/05</div>
                            <h1>Research & Analysis</h1>
                            <p>We conduct user and market research to set the right expectations and gauge potential resources along while providing best design with professional developers.
                            </p>
                        </div>
                    </div>
                    <div className={classes.approachWays}>
                        <div className={classes.approachWayselements}>
                            <div>02/05</div>
                            <h1>Wire Framing & Prototyping</h1>
                            <p>We are here wrapping your dream product with a structure of developing backbone and using that for the mock-ups.
                            </p>
                        </div>
                        <div className={classes.approachWayselements}>
                            <div className={classes.approachWaysImageDiv}><img src={wireframe} alt="" loading="lazy" /></div>
                        </div>
                    </div>
                    <div className={classes.approachWays}>
                        <div className={classes.approachWayselements}>
                            <div className={classes.approachWaysImageDiv}><img src={design} alt="" loading="lazy" /></div>
                        </div>
                        <div className={classes.approachWayselements}>
                            <div>03/05</div>
                            <h1>Visual Design</h1>
                            <p>The Beginner proceeds further towards the design after mutually finalizing the layout and flow. We give life to wireframes with images and thematic color combinations.
                            </p>
                        </div>
                    </div>
                    <div className={classes.approachWays}>
                        <div className={classes.approachWayselements}>
                            <div>04/05</div>
                            <h1>UI Development</h1>
                            <p>This is the place where we beautify everything that have been made until now. This stage validates following predefined UI development guide and service with experienced professionals.
                            </p>
                        </div>
                        <div className={classes.approachWayselements}>
                            <div className={classes.approachWaysImageDiv}><img src={development1} alt="" loading="lazy" /></div>
                        </div>
                    </div>
                    <div className={classes.approachWays}>
                        <div className={classes.approachWayselements}>
                            <div className={classes.approachWaysImageDiv}><img src={testing} alt="" loading="lazy" /></div>
                        </div>
                        <div className={classes.approachWayselements}>
                            <div>05/05</div>
                            <h1>Usability Testing</h1>
                            <p>Prototype testing with end users is the next thing we follow for design validation exercise according to the user trials performed using multiple testing seasons.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Approach