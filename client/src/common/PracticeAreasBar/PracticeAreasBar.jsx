import React from 'react';
import PracticeAreasIcon from './PracticeAreasIcon';

const practiceAreas = [{
  practice: "Business Litigation",
  icon: "fa-balance-scale"  
},
{
  practice: "Employment",
  icon: "fa-id-badge"  
},
{
  practice: "Real Estate",
  icon: "fa-university"  
},
{
  practice: "Personal Injury",
  icon: "fa-ambulance"  
},
{
  practice: "Lemon Law",
  icon: "fa-car"  
},
{
  practice: "Immigration",
  icon: "fa-globe"  
},]

const PracticeAreasBar = () => {
  return (
    <div className="container-fluid field-icon-con">
            <div className="row field-icon-row text-center">
                {practiceAreas.map((practice, index) => {
                    return <PracticeAreasIcon key={index} icon={practice.icon} practice={practice.practice}/>
                })}
            </div>
        </div>
  );
};

export default PracticeAreasBar;