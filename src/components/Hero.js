import React, { useState } from 'react';

function Hero() {
  return (
    <div className="flex-container m-3 position-relative text-center text-light">
      <img className="img-fluid w-100" src="https://images.unsplash.com/photo-1671347020855-8f35d210ee9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt=""/>
      <h2 class="hero-text position-absolute top-50 left-50">Simple solutions for complex problems</h2>
    </div>
  );
}

export default Hero;
