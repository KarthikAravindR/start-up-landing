import React from 'react'
import { withRouter } from 'react-router'
import Fade from 'react-reveal/Fade';
// import video1 from '../../assets/videos/PCAP.mp4'
import classes from './Banner.module.css'
import DyanamicWriting from './DyanamicWriting/DynamicWriting'


const Banner = props => {
    const registerClickHandler = () => {
        props.history.push('/registration')
    }
    return (
        <div className={classes.banner}>
            <div className={classes.bannerdetails}>
                <Fade left>
                    <div className={classes.bannerdetailsheading}>Welcome to The Beginner Consulting</div>
                </Fade>
                <Fade left>
                    <p className={classes.bannerdetailsdesc}>Transforming Business <strong>To Compete for Tomorrow</strong>.</p>
                </Fade>
                <Fade left>
                    <div className={classes.bannerdynamicwriting}><h2>Are  you  looking  for <span>{<DyanamicWriting />} </span></h2> </div>
                </Fade>
                <Fade left>
                    <button className={classes.bannerdetailsbook} onClick={registerClickHandler}>Get Appointment &darr;</button>
                </Fade>
            </div>
            <div className={classes.bannerimage}>
                <Fade right>
                    <div id={classes.egg1}>
                        <div id={classes.egg2}>
                            <div id={classes.egg3}></div>
                        </div>
                    </div>
                </Fade> 
            </div>
        </div>
    )
}

export default withRouter(Banner)
