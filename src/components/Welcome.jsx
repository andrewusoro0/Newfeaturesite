import React from 'react'

let hrefLink ="file:///C:/Users/user/Downloads/resume-cv/AndrewUsoroResume%20(2).pdf"

function Welcome(){

  
    return(
        <div>
        <li className="resume">
        <a herf={hrefLink} target="#">Resume.pdf</a>

        </li>
        <h2 className="intro-text">Hi, my name is Andrew Usoro and I am a software developer from Nigeria.</h2>
        
        </div>

    )

}

export default Welcome;