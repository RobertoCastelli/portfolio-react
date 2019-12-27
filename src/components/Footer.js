import React from 'react'
import logo from '../img/logo192.png'

function Footer() {
    return (
        <div className="footer">
                       <img className="logo-react" src={logo} alt="react-logo" />
            <p>powered by React - CSS Grid</p>
            <p>copyright &copy; 2019 Roberto Castelli</p>
            <p>www.robertocastelli.dev</p>
        </div>
    )
}


export default Footer
