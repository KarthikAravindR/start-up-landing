import React from 'react'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import SideDrawer from '../SideDrawer/SideDrawer'
import { NavLink } from 'react-router-dom'
import LightSpeed from 'react-reveal/LightSpeed';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faInstagram, faWhatsapp, faMailchimp } from '@fortawesome/free-brands-svg-icons';

import './Toolbar.css'

const Toolbar = props => {
    const [showsidebar, setshowsidebar] = React.useState(false)
    const [shrunk, setShrunk] = React.useState(false)
    React.useEffect(() => {
        const handler = () => {
            setShrunk((shrunk) => {
                if (!shrunk && (document.body.scrollTop > 20 ||
                    document.documentElement.scrollTop > 20)) {
                    return true
                }
                if (
                    shrunk &&
                    document.body.scrollTop < 4 &&
                    document.documentElement.scrollTop < 4
                ) {
                    return false;
                }
                return shrunk;
            })
        }
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener("scroll", handler);
    }, [])
    const sidebarshowhandler = (props) => {
        setshowsidebar(true)
    }
    const backdrophandler = (props) => {
        setshowsidebar(false)
    }
    // const arrowStyle = {
    //     backgroundColor: "#090B0F" ,
    //     ':hover': {
    //         borderLeft: "7px solid #090B0F",
    //     }
    // };
    // const altArrowStyle = {
    //     backgroundColor: "rgba(0,0,0,0)" ,
    //     ':hover': {
    //         borderLeft: "7px solid rgba(0,0,0,0)",
    //     }
    // };
    return (
        <div className="trigger-menu-wrapper" style={shrunk ? { boxShadow: "0 0 10px rgba(0, 0, 0, 0.35)" } : { boxShadow: "none" }}>
            <div className='ToolbarLogo'>
                <div className="ToolbarLogo-one">THE BEGINNER</div>
                <div className="ToolbarLogo-two">YOU START, WE DESIGN</div>
                <LightSpeed left><div className="ToolbarLogo-arrow"></div></LightSpeed>
            </div>
            <div className='toolbar-all-actions'>
                <NavLink to='/' exact className='toolbar-actions' activeClassName='toolbar-actions-active'>HOME</NavLink>
                <div className="toolbar-bull">&bull;</div>
                <NavLink to='/about' exact className='toolbar-actions' activeClassName='toolbar-actions-active'>ABOUT</NavLink>
                <div className="toolbar-bull">&bull;</div>
                <NavLink to='/gallery' exact className='toolbar-actions' activeClassName='toolbar-actions-active'>SERVICES</NavLink>
                <div className="toolbar-bull">&bull;</div>
                <NavLink to='/contact' exact className='toolbar-actions' activeClassName='toolbar-actions-active'>CONTACT</NavLink>
            </div>
            <DrawerToggle clicked={sidebarshowhandler} />
            <SideDrawer closed={showsidebar} open={backdrophandler} />
        </div>
    )
}

export default Toolbar
