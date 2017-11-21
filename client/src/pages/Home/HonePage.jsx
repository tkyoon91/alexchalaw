import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {

  return (
    <div>
        <div className="container-fluid">
            <div id="carouselExampleIndicators" className="carousel slide span12" data-ride="carousel">
                <div className="row">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                </div>
            <div className="row">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img className="d-block img-fluid" src="Images/img-slide-1.jpg" alt="First slide"/>
                            <div className="carousel-caption d-none d-md-block img1-caption">
                                <h1>Law Office of Alex Cha <br/> Associates</h1>
                                <h5>With over 15 years of law practice.</h5>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src="Images/img-slide-2.jpg" alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="img2-caption">We are committed to providing great legal service with a personal touch.</h1>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src="Images/img-slide-3.jpg" alt="Third slide"/>
                            <div className="carousel-caption d-none d-md-block img3-caption">
                                <h1>Committed Integrity.</h1>
                                <h3>We offer broad range of legal services for a wide variety of clientele.</h3>
                                <h5>Get the legal help and advice you need today.</h5>
                            </div>
                    </div>
                    
                      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="container-fluid field-icon-con">
            <div className="row field-icon-row text-center">
                
                <div className="col-md-2">
                    <a href="#">
                        <i className="fa fa-balance-scale" aria-hidden="true"></i>
                        <p>Business Litigation</p>
                    </a>
                        
                </div>
                
                <div className="col-md-2">
                    <a href="#">
                        <i className="fa fa-id-badge" aria-hidden="true"></i>
                        <p>Employment</p>
                    </a>
                    
                </div>
                
                <div className="col-md-2">
                    <a href="#">
                        <i className="fa fa-university" aria-hidden="true"></i>
                        <p>Real Estate</p>
                    </a>
                </div>
                
                <div className="col-md-2">
                    <a href="#">
                        <i className="fa fa-ambulance" aria-hidden="true"></i>
                        <p>Personal Injury</p>
                    </a>
                </div>
                
                <div className="col-md-2">
                    <a href="#">
                        <i className="fa fa-car" aria-hidden="true"></i>
                        <p>Lemon Law</p>
                    </a>
                </div>
                
                <div className="col-md-2">
                    <a href="#">
                        <i className="fa fa-globe" aria-hidden="true"></i>
                        <p>Immigration</p>
                    </a>
                </div>
                
                
            </div>
        </div>
        
        
        <div className="container-fluid">
            <div className="row meet-team-row">
                <div className="col-md-4 offset-md-4 text-center building-line">
                    
                    <span className="straight-line"></span>
                    <span><i className="fa fa-university" aria-hidden="true"></i></span>
                    <span className="straight-line"></span>
                    <h1>Meet The Team</h1>
                    <span className="underline-heading"></span>
                    <h6>Legal representation in litigation cases</h6>
                    
                </div>
            </div>
        </div>
        <div className="container-fluid headshot-con">
            <div className ="row">
                
                <div className="col-md-3"></div>
                
                <div className="col-md-3 text-center">
                    <img className="headshots img-fluid" style={{height: "auto", width: "880px"}} src="Images/alex-cha-headshot.png"/>
             <Link to='/alex-cha'>
                        <h1 className="under-name1">ALEX CHA</h1>
                        <p className="name-caption">ATTORNEY AT LAW</p>
            </Link>
                </div>
                <div className="col-md-3 text-center">
                    <img className="headshots img-fluid" style={{height: "auto", width: "880px"}}  src="Images/EdwardKim_Headshot.png"/>
            <Link to='j-edward-kim'>
                    <h1 className="under-name2">J. EDWARD KIM</h1>
                    <p className="name-caption">ATTORNEY AT LAW</p>
            </Link>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
        
        
        <div className="container-fluid">
            <div id="sub-carousel" className="carousel slide span12" data-ride="carousel">
                <div className="row">
                    <ol className="carousel-indicators">
                        <li data-target="#sub-carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#sub-carousel" data-slide-to="1"></li>
                        <li data-target="#sub-carousel" data-slide-to="2"></li>
                    </ol>
                </div>
            <div className="row">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img className="d-block img-fluid" src="Images/sub-slide1.jpg" alt="First slide"/>
                            <div className="carousel-caption d-none d-md-block sub-img1-caption">
                                <h1>Employment</h1>
                                <p>We represent employees on an individual and className action basis, including in court and arbitration. wrongful termination, discrimination, harassment, and unpaid overtime... Our employment lawyers can give your case the attention it needs to succeed.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src="Images/subslide-2.jpg" alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="img2-caption">We are committed to providing great legal service with a personal touch.</h1>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src="Images/subslide-3.jpg" alt="Third slide"/>
                            <div className="carousel-caption d-none d-md-block sub-img3-caption">
                                <h1>Committed Integrity.</h1>
                                <h3>We offer broad range of legal services for a wide variety of clientele.</h3>
                                <h5>Get the legal help and advice you need today.</h5>
                            </div>
                    </div>
                    
                      <a className="carousel-control-prev" href="#sub-carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#sub-carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    
                </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default HomePage;