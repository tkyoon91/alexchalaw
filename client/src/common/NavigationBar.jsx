import React from 'react';
import { Link } from 'react-router-dom';

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
                <li><Link to="/">HOME</Link><i className="fa fa-star" aria-hidden="true"></i></li>
                <li><Link to="/practice-areas">PRACTICE AREAS</Link><i className="fa fa-star" aria-hidden="true"></i></li>
                <li><Link to="/attorneys">ATTORNEYS</Link><i className="fa fa-star" aria-hidden="true"></i></li>
                <li><Link to="/contact">CONTACT US</Link><i className="fa fa-star" aria-hidden="true"></i></li>
                <li><Link to='/'>BLOG</Link></li>
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