import React from 'react'
import { FaHome, FaLinkedin, FaGithub, FaBlogger } from 'react-icons/fa'


function Links() {
    return (
        <div className="links">
            <h1># LINKS</h1>
            <p><FaHome /> Home</p>
            <p><FaLinkedin /> Linkedin</p>
            <p><FaGithub /> Github</p>
            <p><FaBlogger /> Blog</p>
        </div>
    )
}

export default Links
