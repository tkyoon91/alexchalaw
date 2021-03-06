import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/Home/HonePage';
import PracticeAreasPage from '../pages/Practices/PracticeAreasPage';
import BusinessLitigationPage from '../pages/Practices/BusinessLitigationPage';
import LemonLawPage from '../pages/Practices/LemonLawPage';
import PersonalInjuryPage from '../pages/Practices/PersonalInjuryPage';
import RealEstatePage from '../pages/Practices/RealEstatePage';
import ImmigrationPage from '../pages/Practices/ImmigrationPage';
import EmploymentPage from '../pages/Practices/EmploymentPage';
import AlexChaPage from '../pages/Attorneys/AlexChaPage';
import EdwardKimPage from '../pages/Attorneys/EdwardKimPage';
import ContactPage from '../pages/ContactPage';
import AttorneysPage from '../pages/Attorneys/AttorneysPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/practice-areas' component={PracticeAreasPage}/>
      <Route path='/business-litigation' component={BusinessLitigationPage}/>
      <Route path='/personal-injury' component={PersonalInjuryPage}/>
      <Route path='/lemon-law' component={LemonLawPage}/>
      <Route path='/real-estate' component={RealEstatePage}/>
      <Route path='/immigration' component={ImmigrationPage}/>
      <Route path='/employment' component={EmploymentPage}/>
      <Route path='/j-edward-kim' component={EdwardKimPage}/>
      <Route path='/alex-cha' component={AlexChaPage}/>
      <Route path='/contact' component={ContactPage}/>
      <Route path='/attorneys' component={AttorneysPage}/>
    </Switch>
  );
};

export default Routes;