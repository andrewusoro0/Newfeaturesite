import React from 'react';





function Welcome(){

  
    return(
        <div>
        <ul className="download">
        <li className="resume" id="button">
        <a className="text-pdf" id="resume" href={"https://drive.google.com/file/d/1kvP6AwRMizQXo6o5cKOhmwNp2QfDVGdP/view?usp=sharing"} download="AndyTechResume">Resume.pdf</a>
        </li>
        </ul>
        <h2 className="intro-text">Hi, my name is Andrew Usoro and I am a software developer from Nigeria.</h2>
        
        </div>

    )

}

export default Welcome;