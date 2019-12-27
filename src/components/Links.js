import React from 'react'
import { FaHome, FaLinkedin, FaGithub, FaBlogger } from 'react-icons/fa'


function Links() {

    const linkedin = "https://www.linkedin.com/in/roberto-castelli-teal/"
    const github = "https://github.com/RobertoCastelli"
    const blog = "https://www.robertocastelli.dev/"

    return (
        <div className="links">
            <h1># LINKS</h1>
            <p><FaHome /><a href="#container" > Home</a></p>
            <p><FaLinkedin /><a href={linkedin} target="_blank" rel="noopener noreferrer" > Linkedin</a></p>
            <p><FaGithub /><a href={github} target="_blank" rel="noopener noreferrer" > Github</a></p>
            <p><FaBlogger /><a href={blog} target="_blank" rel="noopener noreferrer" > Blog</a></p>
        </div>
    )
}

export default Links
