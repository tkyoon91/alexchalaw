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
                <Headshot image="Images/alex-cha-headshot.png" link='/alex-cha' name="ALEX CHA"/>
                <Headshot image="Images/EdwardKim_Headshot.png" link='/j-edward-kim' name="J. EDWARD KIM"/>
            </div>
        </div>
        <Carousel target="sub-carousel" slides={bottomCarouselSlides}/>
    </div>
  );
};

export default HomePage;