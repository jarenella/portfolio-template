import React from 'react';


function Footer() {
    return (
        <footer className="bg-dark text-center text-lg-start">

            <div className="container p-4">

                <div className="row">

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-light">
                        <a href="https://www.linkedin.com/in/james-arenella-113bab172/" className="text-decoration-none">
                            <h5 className="text-uppercase text-light">LinkedIn</h5>
                        </a>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <a href="https://github.com/jarenella" className="text-decoration-none">
                            <h5 className="text-uppercase mb-0 text-light">GitHub</h5>
                        </a>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase text-light">More</h5>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0 text-light">More</h5>
                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;
