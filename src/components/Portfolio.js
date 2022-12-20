import React from 'react';

function Portfolio() {

  const cardWidth = {
    width: '18rem',
  }

  return (
    <>
      <div id="card-holder" className="d-flex justify-content-center">
        <div className="card bg-secondary" style={cardWidth}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">GitHelpNOW</h5>
            <p className="card-text">A group project inspired by the under-utilization of non-profit related APIs allowing users to both give and get help</p>
            <a href="https://github.com/Renatatims/GitHelpNOW" className="btn btn-primary">Repo</a>
            <a href="https://renatatims.github.io/GitHelpNOW/" className="btn btn-primary">Deployment</a>
          </div>
        </div>
      </div>

      <div id="card-holder" className="d-flex justify-content-center">
        <div className="card bg-secondary" style={cardWidth}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">AccountabilliBuddies</h5>
            <p className="card-text">A group project allowing for users to make accounts and track their progress at goals of their choice</p>
            <a href="https://github.com/mrcorbo/AccountabiliBuddies" className="btn btn-primary">Repo</a>
          </div>
        </div>
      </div>

      <div id="card-holder" className="d-flex justify-content-center">
        <div className="card bg-secondary" style={cardWidth}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Password Generator</h5>
            <p className="card-text">A front-end application that generates a cryptic password at random based off of user-input prompts</p>
            <a href="https://github.com/jarenella/password-generator" className="btn btn-primary">Repo</a>
            <a href="https://jarenella.github.io/password-generator/" className="btn btn-primary">Deployment</a>
          </div>
        </div>
      </div>

      <div id="card-holder" className="d-flex justify-content-center">
        <div className="card bg-secondary" style={cardWidth}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Weather Tracker</h5>
            <p className="card-text">This application allows users to add cities they choose to a list that allows them to track the current weather status there.</p>
            <a href="https://github.com/jarenella/weather-tracker" className="btn btn-primary">Repo</a>
            <a href="https://jarenella.github.io/weather-tracker/" className="btn btn-primary">Deployment</a>
          </div>
        </div>
      </div>

      <div id="card-holder" className="d-flex justify-content-center">
        <div className="card bg-secondary" style={cardWidth}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Readme Generator</h5>
            <p className="card-text">A NodeJS app allowing a user to generate a readme for them based off of only command-line prompts. No need to type up your own markdown. As a back-end application, this project has no deployment link</p>
            <a href="https://github.com/jarenella/readme-generator" className="btn btn-primary">Repo</a>
          </div>
        </div>
      </div>

      <div id="card-holder" className="d-flex justify-content-center">
        <div className="card bg-secondary" style={cardWidth}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Employee Tracker</h5>
            <p className="card-text">This project allows you to store information about employees, managers, departments, salaries, etc. in a database and easily view the information through command line UI. Information can also be easily updated through the program. Because this project is back-end only, there is no deployment link</p>
            <a href="https://github.com/jarenella/employee-tracker" className="btn btn-primary">Repo</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
