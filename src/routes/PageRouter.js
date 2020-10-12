import React from 'react';
import { Route } from 'react-router-dom';
import PrivacyPolicy from '../components/pages/PrivacyPolicy';
import TermsOfService from '../components/pages/TermsOfService';
import Disclaimer from '../components/pages/Disclaimer';

const PageRouter = () => {
  return (
    <>
      <Route path="/page/privacy-policy" component={PrivacyPolicy} />
      <Route path="/page/terms-of-service" component={TermsOfService} />
      <Route path="/page/disclaimer" component={Disclaimer} />
    </>
  );
};

export default PageRouter;
