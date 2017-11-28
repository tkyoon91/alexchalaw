import React from 'react';

const AttorneyProfile = (props) => {
  return (
    <div>
      <div style={{backgroundImage: "url(Images/title-wood.jpg", minHeight: "250px", backgroundAttachment:"fixed", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
      <div style={{fontFamily: 'nanum gothic', top: "-150px", position: "relative", color: "white", textAlign: "center"}}>
        <div style={{fontWeight: "900", fontSize: "37px"}}>{props.title}</div>
        <div style={{fontWeight: "400", fontSize: "18px"}}> Attorney At Law </div>
      </div>
      <div className="media" style={{backgroundColor: "white", paddingLeft: "100px"}}>
        <img className="d-flex mr-3" src={props.image} style={{height: "auto", width: "80vh", paddingRight: "50px"}}/>
        <div className="media-body">
          <h5 className="mt-0" style={{fontSize: "50px", fontWeight: "900"}}>{props.heading}</h5>
          {props.body}
        </div>
      </div>
  </div>
  );
};

export default AttorneyProfile;