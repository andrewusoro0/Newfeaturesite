import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const github = <FontAwesomeIcon icon={faGithub} />
const linkdin = <FontAwesomeIcon icon={faLinkedin} />
const twitter = <FontAwesomeIcon icon={faTwitterSquare} />




function Footer(){

    return(
        <>  
         <main>
           <div className="section-img">
            <img className="right-img" src="https://s3.amazonaws.com/cdn-hosted-media/hi-site/images/section-asset/phone-conversation-monochrome.svg" alt=""/>
           </div>
         <div className="head">
            <h2 className="left-main">Get In Touch</h2>
           <p className="coordinator">I'm proudly located in Akwa Ibom,Nigeria.
            I value ease of client communication.
            You can send me an email at <span className="email">andrewusoro@gmail.com</span>. 
          </p>

          <div className="list_style">
          <li>
          <a className="icons" href={'https://github.com/andrewusoro0'}>{github}</a>
          </li>
          <li >
          <a className="icons" href={'https://www.linkedin.com/in/andrew-usoro-a942351ab/'}>{linkdin}</a>
          </li>
          <li >
          <a className="icons" href={'AndrewWeb7AndrewWeb7'}>{twitter}</a>
          </li>
          </div>
            
        </div>
         </main>

        </>
    )

}

export default Footer;