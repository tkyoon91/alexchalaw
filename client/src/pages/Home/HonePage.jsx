import React from 'react';

const HomePage = () => {
  return (
      <div class="container-fluid">
            <div id="carouselExampleIndicators" class="carousel slide span12" data-ride="carousel">
                <div class="row">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                </div>
            <div class="row">
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <img class="d-block img-fluid" src="Images/img-slide-1.jpg" alt="First slide">
                            <div class="carousel-caption d-none d-md-block img1-caption">
                                <h1>Law Office of Alex Cha </br> & Associates</h1>
                                <h5>With over 15 years of law practice.</h5>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block img-fluid" src="Images/img-slide-2.jpg" alt="Second slide">
                            <div class="carousel-caption d-none d-md-block">
                                <h1 class="img2-caption">We are committed to providing great legal service with a personal touch.</h1>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block img-fluid" src="Images/img-slide-3.jpg" alt="Third slide">
                            <div class="carousel-caption d-none d-md-block img3-caption">
                                <h1>Committed Integrity.</h1>
                                <h3>We offer broad range of legal services for a wide variety of clientele.</h3>
                                <h5>Get the legal help and advice you need today.</h5>
                            </div>
                    </div>
                    
                      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    
                </div>
            </div>
        </div>
        
        <!-- -------------- VARIOUS FIELDS ICONS -------------- -->
            
        <div class="container-fluid field-icon-con">
            <div class="row field-icon-row text-center">
                
                <div class="col-md-2">
                    <a href="#">
                        <i class="fa fa-balance-scale" aria-hidden="true"></i>
                        <p>Business Litigation</p>
                    </a>
                        
                </div>
                
                <div class="col-md-2">
                    <a href="#">
                        <i class="fa fa-id-badge" aria-hidden="true"></i>
                        <p>Employment</p>
                    </a>
                    
                </div>
                
                <div class="col-md-2">
                    <a href="#">
                        <i class="fa fa-university" aria-hidden="true"></i>
                        <p>Real Estate</p>
                    </a>
                </div>
                
                <div class="col-md-2">
                    <a href="#">
                        <i class="fa fa-ambulance" aria-hidden="true"></i>
                        <p>Personal Injury</p>
                    </a>
                </div>
                
                <div class="col-md-2">
                    <a href="#">
                        <i class="fa fa-car" aria-hidden="true"></i>
                        <p>Lemon Law</p>
                    </a>
                </div>
                
                <div class="col-md-2">
                    <a href="#">
                        <i class="fa fa-globe" aria-hidden="true"></i>
                        <p>Immigration</p>
                    </a>
                </div>
                
                
            </div>
        </div>
        
        
        
        
        <!-- --------------- MEET THE TEAM --------------- -->
        
        <div class="container-fluid">
            <div class="row meet-team-row">
                <div class="col-md-4 offset-md-4 text-center building-line">
                    
                    <span class="straight-line"></span>
                    <span><i class="fa fa-university" aria-hidden="true"></i></span>
                    <span class="straight-line"></span>
                    <h1>Meet The Team</h1>
                    <span class="underline-heading"></span>
                    <h6>Legal representation in litigation cases</h6>
                    
                </div>
            </div>
        </div>
        
        <!-- --------------- HEADSHOTS --------------- -->
        
        <div class="container-fluid headshot-con">
            <div class ="row">
                
                <div class="col-md-3"></div>
                
                <div class="col-md-3 text-center">
                    <img class="headshots img-fluid" style="height:auto;width:880px" src="Images/alex-cha-headshot.png">
                        <h1 class="under-name1">ALEX CHA</h1>
                        <p class="name-caption">ATTORNEY AT LAW</p>
                </div>
                
                <div class="col-md-3 text-center">
                    <img class="headshots img-fluid" style="height:auto;width:880px" src="Images/EdwardKim_Headshot.png">
                    <h1 class="under-name2">J. EDWARD KIM</h1>
                    <p class="name-caption">ATTORNEY AT LAW</p>
                </div>
                
                <div class="col-md-3"></div>
            </div>
        </div>
        
        <!-- --------------- SUB CAROUSEL --------------- -->
        
        <div class="container-fluid">
            <div id="sub-carousel" class="carousel slide span12" data-ride="carousel">
                <div class="row">
                    <ol class="carousel-indicators">
                        <li data-target="#sub-carousel" data-slide-to="0" class="active"></li>
                        <li data-target="#sub-carousel" data-slide-to="1"></li>
                        <li data-target="#sub-carousel" data-slide-to="2"></li>
                    </ol>
                </div>
            <div class="row">
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <img class="d-block img-fluid" src="Images/sub-slide1.jpg" alt="First slide">
                            <div class="carousel-caption d-none d-md-block sub-img1-caption">
                                <h1>Employment</h1>
                                <p>We represent employees on an individual and class action basis, including in court and arbitration. wrongful termination, discrimination, harassment, and unpaid overtime... Our employment lawyers can give your case the attention it needs to succeed.</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block img-fluid" src="Images/subslide-2.jpg" alt="Second slide">
                            <div class="carousel-caption d-none d-md-block">
                                <h1 class="img2-caption">We are committed to providing great legal service with a personal touch.</h1>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block img-fluid" src="Images/subslide-3.jpg" alt="Third slide">
                            <div class="carousel-caption d-none d-md-block sub-img3-caption">
                                <h1>Committed Integrity.</h1>
                                <h3>We offer broad range of legal services for a wide variety of clientele.</h3>
                                <h5>Get the legal help and advice you need today.</h5>
                            </div>
                    </div>
                    
                      <a class="carousel-control-prev" href="#sub-carousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#sub-carousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    
                </div>
            </div>
        </div>
  );
};

export default HomePage;