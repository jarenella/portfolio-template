import React, { useState } from 'react';
import Hero from './Hero';
import Body from './Body';

function Header() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const activeButtonCSS = "nav-link text-light bg-secondary rounded";
  const nonActiveButtonCSS = "nav-link text-light rounded"
  let aboutMeButtonCSS = '';
  let portfolioButtonCSS = '';
  let contactButtonCSS = '';
  let resumeButtonCSS = '';
  
  currentPage === "AboutMe" ? aboutMeButtonCSS = activeButtonCSS : aboutMeButtonCSS = nonActiveButtonCSS;
  currentPage === "Portfolio" ? portfolioButtonCSS = activeButtonCSS : portfolioButtonCSS = nonActiveButtonCSS;
  currentPage === "Contact" ? contactButtonCSS = activeButtonCSS : contactButtonCSS = nonActiveButtonCSS;
  currentPage === "Resume" ? resumeButtonCSS = activeButtonCSS : resumeButtonCSS = nonActiveButtonCSS;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <h1 className="navbar-brand text-light m-3 mr-0 mt-0 mb-0">Firstname Lastname</h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className={aboutMeButtonCSS} href="#about-me" 
              onClick={() => setCurrentPage('AboutMe')}
              >About Me</a>
            </li>
            <li className="nav-item">
              <a className={portfolioButtonCSS} href="#portfolio"
              onClick={() => setCurrentPage('Portfolio')}
              >Portfolio</a>
            </li>
            <li className="nav-item">
              <a className={contactButtonCSS} href="#contact"
              onClick={() => setCurrentPage('Contact')}
              >Contact</a>
            </li>
            <li className="nav-item">
              <a className={resumeButtonCSS} href="#resume"
              onClick={() => setCurrentPage('Resume')}
              >Resume</a>
            </li>
          </ul>
        </div>
      </nav>
      <Hero />
      <Body currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default Header;
