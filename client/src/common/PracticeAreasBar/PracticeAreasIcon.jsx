import React from 'react';

const PracticeAreasIcon = (props) => {
  return (
    <div className="col-md-2">
        <a href="#">
            <i className={"fa " + props.icon} aria-hidden="true"></i>
            <p>{props.practice}</p>
        </a>
    </div>
  );
};

export default PracticeAreasIcon;