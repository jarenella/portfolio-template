import React, { useState } from 'react';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

function Body(props) {

  const imageStyling = {
    width: '200px',
    height: '200px',
    borderRadius: '50%'
  }

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
    cardTitle = "My proficiencies:";
    cardText = "";
    id = "resume";
  }

  return (
    <div id={id} className="card text-white bg-dark m-3">
      <div className="card-header">{header}</div>

      {props.currentPage === "AboutMe" ? 
      <img style={imageStyling} alt="A professional portfolio headshot" src="https://media.licdn.com/dms/image/D5603AQFomccCQJ6I4A/profile-displayphoto-shrink_200_200/0/1669497505455?e=1677110400&v=beta&t=sDMRU_uSQs-I0T7DLZe4RVUd0YnD6D_ToUwz4QpkYZ4"/> 
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
