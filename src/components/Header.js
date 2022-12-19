import React, { useState } from 'react';
import Hero from './Hero';
import Body from './Body';

function Header() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

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
              <a className="nav-link text-light" href="#about-me" 
              onClick={() => setCurrentPage('AboutMe')}
              >About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#portfolio"
              onClick={() => setCurrentPage('Portfolio')}
              >Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#contact"
              onClick={() => setCurrentPage('Contact')}
              >Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#resume"
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
