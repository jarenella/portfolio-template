import React, { useState } from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <h1 className="navbar-brand text-light m-3 mr-0 mt-0 mb-0">Firstname Lastname</h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link text-light" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
