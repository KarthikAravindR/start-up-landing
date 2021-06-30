import React from 'react'
import Flip from 'react-reveal/Flip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers,faCode, faHandHoldingUsd, faCar, faAd } from '@fortawesome/free-solid-svg-icons';

import classes from './Service.module.css'
// import webDevelopment from '../../../assets/images/webDevelopment.jpg'

const Service = props => {
    return (
        <div className={classes.serviceContainer}>
            <Flip top>
                <div className={classes.service}>
                    <div className={classes.serviceimage}>
                        <div className={classes.serviceicon5}>
                            <FontAwesomeIcon icon={faUsers} />
                        </div>
                    </div>
                    <div className={classes.servicedetail}>
                        <h2>Free Consultation</h2>
                        <p> we trend to style best responsive websites that represent absolutely the reflection of your business.</p>
                    </div>
                </div>
            </Flip>
            <Flip right>
                <div className={classes.service}>
                    <div className={classes.serviceimage}>
                        <div className={classes.serviceicon3}>
                            <FontAwesomeIcon icon={faCode} />
                        </div>
                    </div>
                    <div className={classes.servicedetail}>
                        <h2>Web Development</h2>
                        <p> we trend to style best responsive websites that represent absolutely the reflection of your business.</p>
                    </div>
                </div>
            </Flip>
            <Flip bottom>
                <div className={classes.service}>
                    <div className={classes.serviceimage}>
                        <div className={classes.serviceicon2}>
                            <FontAwesomeIcon icon={faHandHoldingUsd} />
                        </div>
                    </div>
                    <div className={classes.servicedetail}>
                        <h2>Finance</h2>
                        <p>Help in decision making processes to ensure that businesses are financially successful.</p>
                    </div>
                </div>
            </Flip>
            <Flip left>
                <div className={classes.service}>
                    <div className={classes.serviceimage}>
                        <div className={classes.serviceicon1}>
                            <FontAwesomeIcon icon={faCar} />
                        </div>
                    </div>
                    <div className={classes.servicedetail}>
                        <h2>Tranportation</h2>
                        <p>Transportation of large capacity and flexibility, as well as the secure storage, handling and transport of goods.</p>
                    </div>
                </div>
            </Flip>
            <Flip top>
                <div className={classes.service}>
                    <div className={classes.serviceimage}>
                        <div className={classes.serviceicon4}>
                            <FontAwesomeIcon icon={faAd} />
                        </div>
                    </div>
                    <div className={classes.servicedetail}>
                        <h2>Promotion</h2>
                        <p>High-end marketing and business branding services online as well as offline ensuring promising results every time.</p>
                    </div>
                </div>
            </Flip>
        </div >
    )
}

export default Service