import React, { useState } from 'react'
import Card from './Card'
import Featured from './Featured'


function Projects() {
    const [numProgetti, setNumProgetti] = useState(0)
    const handleChildData = childData => setNumProgetti(childData)

    return (
        <div className="projects">
            <h1># FEATURED</h1>
            <Featured />
            <h1># PROJECTS n°{numProgetti}</h1>
            <Card onChildClick={handleChildData}/>
        </div>
    )
}

export default Projects
