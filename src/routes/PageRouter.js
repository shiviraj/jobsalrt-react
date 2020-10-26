import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PrivacyPolicy from '../components/pages/PrivacyPolicy';
import TermsOfService from '../components/pages/TermsOfService';
import Disclaimer from '../components/pages/Disclaimer';
import AboutUs from '../components/pages/AboutUs';
import ContactUs from '../components/pages/ContactUs';
import NotFound from '../components/includes/NotFound';

const PageRouter = () => {
  return (
    <Switch>
      <Route path="/page/privacy-policy" component={PrivacyPolicy} />
      <Route path="/page/terms-of-service" component={TermsOfService} />
      <Route path="/page/disclaimer" component={Disclaimer} />
      <Route path="/page/about-us" component={AboutUs} />
      <Route
        path={['/page/contact-us', '/page/share-feedback']}
        component={ContactUs}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default PageRouter;
