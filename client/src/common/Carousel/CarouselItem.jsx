import React from 'react';
import classNames from 'classnames'
const CarouselItem = (props) => {
  return (
    <div className={classNames('carousel-item', {"active": props.active})}>
        <img className="d-block img-fluid" src={props.source}/>
            <div className={classNames("carousel-caption d-none d-md-block", props.captionStyle)}>
              {props.h1 ? <h1>{props.h1}</h1> : null}
              {props.h3 ? <h3>{props.h3}</h3> : null}
              {props.h5 ? <h5>{props.h5}</h5> : null}
              {props.p ? <p>{props.p}</p> : null }
            </div>
    </div>
  );
};

export default CarouselItem;