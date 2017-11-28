import React from 'react';
import Carousel from '../../common/Carousel/Carousel';
import PracticeAreasBar from '../../common/PracticeAreasBar/PracticeAreasBar';
import Headshot from '../../common/Headshot';

const topCarouselSlides = [
    {
        source:"Images/img-slide-1.jpg",
        h1:"Law Office of Alex Cha Associates",
        h5:"With over 15 years of law practice",
        captionStyle:'img1-caption'
    },
    {
        source:"Images/img-slide-2.jpg",
        h1:"We are committed to providing great legal service with a personal touch.",
        captionStyle:'img2-caption'
    },
    {
        source:"Images/img-slide-3.jpg",
        h1:"Committed Integrity",
        h3:"We offer broad range of legal services for a wide variety of clientele.",
        h5:"Get the legal help and advice you need today.",
        captionStyle:'img3-caption'    
    }
];

const bottomCarouselSlides = [
    {
        source:"Images/sub-slide1.jpg",
        h1: "Employment",
        p: "We represent employees on an individual and className action basis, including in court and arbitration. wrongful termination, discrimination, harassment, and unpaid overtime... Our employment lawyers can give your case the attention it needs to succeed.",
        captionStyle: "sub-img-1-caption"
    },
    {
        source:"Images/subslide-2.jpg",
        h1: "We are committed to providing great legal service with a personal touch.",
        captionStyle: "img2-caption"
    },
    {
        source:"Images/subslide-3.jpg",
        h1: "Committed Integrity.",
        h3: "We offer broad range of legal services for a wide variety of clientele.",
        h5: "Get the legal help and advice you need today."
    }
];

const HomePage = () => {
  return (
    <div>
        <Carousel target="top-carousel" slides={topCarouselSlides}/>
        <PracticeAreasBar/> 
        <div className="container-fluid">
            <div className="row new-section-row">
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
                <div className="col-md-3 team-col"></div>
                <Headshot image="Images/alex-cha-headshot.png" link='/alex-cha' name="ALEX CHA"/>
                <Headshot image="Images/EdwardKim_Headshot.png" link='/j-edward-kim' name="J. EDWARD KIM"/>
            </div>
        </div>
        <Carousel target="sub-carousel" slides={bottomCarouselSlides}/>
        <div className="container-fluid">
            <div className="row new-section-row">
                <div className="col-md-4 offset-md-4 text-center building-line">
                    <span className="straight-line"></span>
                    <span><i className="fa fa-anchor" aria-hidden="true"></i></span>
                    <span className="straight-line"></span>
                    <h1>Practice Areas</h1>
                    <span className="underline-heading"></span>
                    <h6>We offer a broad range of law services</h6>
                </div>
            </div>
        </div>
          
        <div className="container-fluid">
            <div className="row new-section-row text-center">
                
                <div className="col-md-3 pa-col">
                    <img src="Images/PA_Employment1.jpg"></img>
                    <h5 className="font-weight-bold">EMPLOYMENT</h5>
                    <p className="pa-caption">In this burgeoning area of law, we have represented both plaintiff and defendants involved in various employment related litigation.</p>
                </div>
                
                <div className="col-md-3 pa-col">
                    <img src="Images/PA_BusLitigation2.jpg"></img>
                    <h5 className="font-weight-bold">BUSINESS LITIGATION</h5>
                    <p className="pa-caption">We practice all facets of litigation, representing plaintiffs and defendants in business, real estate, and other matters.</p>
                </div>
                
                <div className="col-md-3 pa-col">
                    <img src="Images/PA_PerInjury3.jpg"></img>
                    <h5 className="font-weight-bold">PERSONAL INJURY</h5>
                    <p className="pa-caption">If you have suffered an injury as a result of an accident or the negligence of others, you need an attorney to represent your interests. We will do our best to help you receive the just compensation.</p>
                </div>
                
                <div className="col-md-3 pa-col">
                    <img src="Images/PA_LemLaw4.jpg"></img>
                    <h5 className="font-weight-bold">LEMON LAW</h5>
                    <p className="pa-caption">If you have problems with your vehicle that have required multiple visits to the dealership, your vehicle may qualify as a “lemon.” You could receive a monetary settlement or a buyback of the vehicle.</p>
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default HomePage;