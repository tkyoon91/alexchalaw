import React from 'react';
import CarouselItem from './CarouselItem';

const Carousel = (props) => {
  return (
    <div className="container-fluid">
        <div id={props.target} className="carousel slide span12" data-ride="carousel">
            <div className="row">
                <ol className="carousel-indicators">
                    {props.slides.map((_ , index) => {
                        return <li key={index} data-target={'#' + props.target} data-slide-to={index} className={index === 0 ? "active" : null }></li>
                    })}
                </ol>
            </div>
            <div className="row">
                <div className="carousel-inner" role="listbox">
                    {props.slides.map((slide, index) => {
                        return <CarouselItem source={slide.source} h1={slide.h1} h3={slide.h3} h5={slide.h5} p={slide.p} captionStyle={slide.captionStyle} active={index===0} key={index}/>
                    })}
                    <a className="carousel-control-prev" href={'#' + props.target} role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href={'#' + props.target} role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Carousel;