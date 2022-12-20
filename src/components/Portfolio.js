import React from 'react';

function Portfolio() {

  const cardWidth = {
    width: '18rem',
  }

  return (
    <div id="card-holder" className="d-flex justify-content-center">
      <div className="card bg-secondary" style={cardWidth}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
