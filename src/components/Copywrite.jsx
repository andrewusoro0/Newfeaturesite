import React, {useState} from 'react'

const currentDate = new Date()
const year = currentDate.getFullYear();

function Copywrite(){

    setInterval(increase,1000) 

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())
 
   function increase() {
     setCurrentTime(new Date().toLocaleTimeString())
   }

  return(
      <div className="copywrite">
          <p>v4.0.4 - Nothing copyrighted, take everything {currentTime} {year} </p>
         
      </div>
  )
      
        

}

export default Copywrite;

