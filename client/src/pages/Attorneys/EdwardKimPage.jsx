import React from 'react';
import AttorneyProfile from './AttorneyProfile';

const EdwardKimPage = () => {
  const body = (
    <div>
      <p>Attorney J. Edward Kim is of counsel to the Law Offices of Alex Cha & Associates. Mr. Kim has worked at a boutique personal injury firm as well as a criminal defense firm to round out his legal background. He adds an additional dimension to the firm by bringing his experience working on major litigation cases involving local and international corporate clients.</p>
      <p>Before attending law school, Mr. Kim participated in an internship with the Los Angeles City Attorney’s Office in the Victim Assistance Program. His role was reaching out to Korean speaking victims of crime in Los Angeles to offer them assistance through city and state sponsored programs. Mr. Kim was also employed by the Wilshire Community Police Council as a Korean interpreter for the LAPD Wilshire Division for two and a half years prior to starting law school. The people and stories he encountered while interning and working as an interpreter only strengthened his resolve to become an attorney. Mr. Kim’s ultimate goal is to become an advocate for the community, to give a voice to the disenfranchised and marginalized people.</p>
      <p>Mr. Kim earned his J.D. from the Marshall Wythe School of Law at the College of William & Mary in Williamsburg, Virginia. During law school, he externed at the Newport News Public Defender’s Office, continuing to develop his commitment to serving the community. He is licensed to practice law in the State of California and in the United States District Court – Central District of California.</p>
      <p>Mr. Kim received his B.A. from Dartmouth College where he was a recipient of the Leon Rotschild ’24 scholarship.</p>
    </div>
  )
  return (
    <AttorneyProfile title="J.Edward Kim" image="Images/ekim-page-headshot.jpg" heading="J. Edward Kim" body={body}/>
  );
};

export default EdwardKimPage;

