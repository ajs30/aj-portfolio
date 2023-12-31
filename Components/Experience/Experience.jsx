import React ,{useContext}from 'react'
import { themeContext } from "../../Context";

import './Experience.css'

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience">
      
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'orange': ''}} >4+</div>
        <span  >Years</span>
        <span>Experience</span>
     </div>
     <div className="achievement">
       <div className ="circle" style={{color: darkMode?'orange': ''}}>6+</div>
        <span >Completed</span>
        <span> projects</span>

     </div>
     <div className="achievement">
       <div className="circle" style={{color: darkMode?'orange': ''}}>4+</div>
        <span>Companies</span>
        <span>Works</span>
     </div>
    </div>
  )
}

export default Experience
