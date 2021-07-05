import React from 'react'
import classes from './SideDrawer.module.css'
import Backdrop from '../Backdrop/Backdrop'

const sideDrawer = (props) => {
    let additionalclasses = [classes.SideDrawer, classes.Close]
    if (props.closed) {
        additionalclasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <div>
            <Backdrop show={props.closed} clicked={props.open} />
            <div className={additionalclasses.join(' ')}>
                <div className='ToolbarLogoCont'>
                    <div className='ToolbarLogo'>
                        <div className="ToolbarLogo-one">THE BEGINNER</div>
                        <div className="ToolbarLogo-two">YOU START, WE DESIGN</div>
                        <div className="ToolbarLogo-arrow"></div>
                    </div>
                </div>
                <nav>
                    <div
                        onClick={() => { props.open(); document.getElementById('Home').scrollIntoView({ behavior: 'smooth', block: 'center' }) }}
                        className='toolbar-actions'>
                        HOME
                    </div>
                    <div className="toolbar-bull">&bull;</div>
                    <div
                        onClick={() => { props.open(); document.getElementById('Service').scrollIntoView({ behavior: 'smooth', block: 'center' }) }}
                        className='toolbar-actions'>
                        SERVICES
                    </div>
                    <div className="toolbar-bull">&bull;</div>
                    <div
                        onClick={() => { props.open(); document.getElementById('Approach').scrollIntoView({ behavior: 'smooth' }) }}
                        className='toolbar-actions'>
                        APPROACH
                    </div>
                    <div className="toolbar-bull">&bull;</div>
                    <div
                        onClick={() => { props.open(); document.getElementById('Contact').scrollIntoView({ behavior: 'smooth', block: 'center' }) }}
                        className='toolbar-actions'>
                        CONTACT
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default sideDrawer