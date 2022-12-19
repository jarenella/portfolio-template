import React, { useState } from 'react';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

function Body(props) {

  let header = "";
  let cardTitle = "";
  let cardText = "";
  let id = "";
  if (props.currentPage === 'AboutMe') {
    header = "About Me";
    cardTitle = "Jamie Arenella";
    cardText = "I am a web developer";
    id = "about-me";
  } else if (props.currentPage === 'Portfolio') {
    header = "Portfolio";
    cardTitle = "My favorite projects";
    cardText = "";
    id = "portfolio";
  } else if (props.currentPage === 'Contact') {
    header = "Contact";
    cardTitle = "Send me a message:";
    cardText = "";
    id = "contact";
  } else if (props.currentPage === 'Resume') {
    header = "Resume";
    cardTitle = "My qualifications:";
    cardText = "";
    id = "resume";
  }

  return (
    <div id={id} className="card text-white bg-dark m-3">
      <div className="card-header">{header}</div>

      {props.currentPage === "AboutMe" ? 
      <img src="https://i.guim.co.uk/img/media/b60a4e5fed7d577aaaae08c2f194ad432732b073/0_0_5333_3200/master/5333.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=01520448b7ae5a2354e6d65f460ff9b9"/> 
      : <p></p>}

      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardText}</p>
        
        {props.currentPage === "Portfolio" ? <Portfolio /> : <p></p>}
        {props.currentPage === "Contact" ? <Contact /> : <p></p>}
        {props.currentPage === "Resume" ? <Resume /> : <p></p>}

      </div>
    </div>
  );
}

export default Body;
