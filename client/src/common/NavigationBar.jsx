import React from 'react';

const NavigationBar = () => {
  return (
    <header>
            <div className="container-fluid">
                <div className="row">
                    
        
                    <div className="col-md-3">
                        <img className="nav-logo" src="Images/aclaw_full_logo.png"/>
                    </div>
                    
        
                    <div className="col-md-6">
                        <nav>
                            <ul>
                                <li><a href="#">HOME</a><i className="fa fa-star" aria-hidden="true"></i></li>
                                <li><a href="#">PRACTICE AREAS</a><i className="fa fa-star" aria-hidden="true"></i></li>
                                <li><a href="#">ATTORNEYS</a><i className="fa fa-star" aria-hidden="true"></i></li>
                                <li><a href="#">CONTACT US</a><i className="fa fa-star" aria-hidden="true"></i></li>
                                <li><a href="#">BLOG</a></li>
                            </ul>
                        </nav>
                    </div>
                    
               
                    <div className="col-md-3">
                        
                        <div className="row float-right off-details">
                            <p className="topright-icon clock-icon"><i className="fa fa-clock-o" aria-hidden="true"></i></p>
                            <p className="off-hours">9:00am - 6:00pm Mon - Fri</p>
                        </div>
                        
                        <div className="row float-right off-details">
                            <p className="topright-icon"> <i className="fa fa-phone" aria-hidden="true"></i></p>
                            <p className="off-number"> 213 . 351 . 3513 Consult us</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </header>
  );
};

export default NavigationBar;