import React from 'react';
import { Link } from 'react-router-dom';

const Headshot = (props) => {
  return (
    <div className="col-md-3 text-center">
        <img className="headshots img-fluid" style={{height: "auto", width: "880px"}}  src={props.image}/>
        <Link to={props.link}>
            <h1 className="under-name2">{props.name}</h1>
            <p className="name-caption">ATTORNEY AT LAW</p>
        </Link>
    </div>
  );
};

export default Headshot;