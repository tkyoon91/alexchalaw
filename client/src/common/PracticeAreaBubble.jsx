import React from 'react';

const PracticeAreaBubble = (props) => {
  return (
    <div className="col-md-3 pa-col">
        <img src={props.image}></img>
        <h5 className="font-weight-bold">{props.practice}</h5>
        <p className="pa-caption">{props.description}</p>
    </div>
  );
};

export default PracticeAreaBubble;