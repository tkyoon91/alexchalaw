import React from 'react';
import AttorneyProfile from './AttorneyProfile';

const AlexChaPage = () => {
  const body = (
    <div>
    <p>Alex M. Cha has been practicing law for 17 years and has significant experience in litigation matters.  Mr. Cha represents clients in matters including personal injury, employment, lemon law, business litigation and transactions, real estate litigation, landlord and tenant issues, consumer law and immigration.</p>
    <div>Mr. Cha has a long history of actively serving the community and has served in the following organizations:</div>
    <ul>
      <li>Advisory Board Member – Korean Prosecutor’s Association</li>
      <li>Board Member – Korean American Bar Association</li>
      <li>Board Member – Korean American Chamber of Commerce of Los Angeles</li>
      <li>Board Member – Korean American Coalition</li>
      <li>Former President of Wilshire Center Koreatown Neighborhood Council</li>
      <li>Former Treasurer of Downtown Los Angeles Neighborhood Council</li>
      <li>Former Commissioner of the Rent Adjustment Commission of City of Los Angeles</li>
      <li>Former Commissioner of Industrial Development Authority of City of Los Angeles</li>
    </ul>
    <p>Mr. Cha graduated from University of California, Irvine and was a member of Lambda Phi Epsilon.  During his second year of college, Mr. Cha was deployed to Saudi Arabia for Operation Desert Storm as a soldier in the US Army.  Mr. Cha received his J.D. from Loyola Law School in Los Angeles and was a fellow of USC’s NetKAL.</p>
    </div>
  )
  return (
    <AttorneyProfile title="Alex Cha" heading="ALEX M. CHA" image="Images/alex-cha-page-headshot.jpg"  body={body}/>
  );
};

export default AlexChaPage;



