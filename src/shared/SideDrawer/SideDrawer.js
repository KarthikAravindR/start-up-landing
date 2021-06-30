import React from 'react'
import classes from './SideDrawer.module.css'
import { NavLink } from 'react-router-dom'
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
                <h4 className={classes.Title}>Premier Soccer Academy, Poonamallee</h4>
                <nav>
                    <NavLink to='/' className={classes.toolbaractions} activeClassName={classes.toolbaractionsactive}>HOME</NavLink>
                    <NavLink to='/' className={classes.toolbaractions} activeClassName={classes.toolbaractionsactive}>ABOUT</NavLink>
                    <NavLink to='/' className={classes.toolbaractions} activeClassName={classes.toolbaractionsactive}>GALLERY</NavLink>
                    <NavLink to='/' className={classes.toolbaractions} activeClassName={classes.toolbaractionsactive}>CONTACT</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default sideDrawer