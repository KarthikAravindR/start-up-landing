import React from 'react'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import SideDrawer from '../SideDrawer/SideDrawer'
import LightSpeed from 'react-reveal/LightSpeed';

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
    return (
        <div className="trigger-menu-wrapper" style={shrunk ? { boxShadow: "0 0 10px rgba(0, 0, 0, 0.35)" } : { boxShadow: "none" }}>
            <div className='ToolbarLogo'>
                <div className="ToolbarLogo-one">THE BEGINNER</div>
                <div className="ToolbarLogo-two">YOU START, WE DESIGN</div>
                <LightSpeed left><div className="ToolbarLogo-arrow"></div></LightSpeed>
            </div>
            <div className='toolbar-all-actions'>
                <div
                    onClick={() => {document.getElementById('Home').scrollIntoView({ behavior: 'smooth', block: 'center' })}}
                    className='toolbar-actions'>
                    HOME
                </div>
                <div className="toolbar-bull">&bull;</div>
                <div
                    onClick={() => {document.getElementById('Service').scrollIntoView({ behavior: 'smooth', block: 'center' })}}
                    className='toolbar-actions'>
                    SERVICES
                </div>
                <div className="toolbar-bull">&bull;</div>
                <div
                    onClick={() => {document.getElementById('Approach').scrollIntoView({ behavior: 'smooth' })}}
                    className='toolbar-actions'>
                    APPROACH
                </div>
                <div className="toolbar-bull">&bull;</div>
                <div
                    onClick={() => {document.getElementById('Contact').scrollIntoView({ behavior: 'smooth', block: 'center' })}}
                    className='toolbar-actions'>
                    CONTACT
                </div>
            </div>
            <DrawerToggle clicked={sidebarshowhandler} />
            <SideDrawer closed={showsidebar} open={backdrophandler} />
        </div>
    )
}

export default Toolbar
