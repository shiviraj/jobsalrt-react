import React from 'react';
import styled from 'styled-components';

const PageLayout = styled.div`
  margin: 32px;
  & p {
    margin: 16px;
  }
  & li {
    margin-left: 32px;
  }
  @media only screen and (max-width: 420px) {
    & {
      margin: 8px;
    }
    & p {
      margin: 4px;
    }
    & li {
      margin-left: 24px;
    }
  }
`;

const AboutUs = () => {
  return (
    <PageLayout>
      <h1>About JobsAlrt</h1>
      <p>
        Jobs Alrt is a Job Portal that allows users to search for Jobs in the
        Government Sector.We list Jobs According to User Qualification, Location
        and Various Other criteria.
      </p>
      <h1>About Our Team</h1>
      <p>
        Our dedicated team includes 8 full-time experts. We are passionate about
        Latest information and details about Govt Jobs Sector. Our staff has
        more than 6 years of experience in this sector.
      </p>
      <h1>Services Offered</h1>
      <p>
        We, at Jobs Alrt, understand, that despite the lucrative nature of
        Indian jobs and the possibilities they offer, finding one is not easy.
        This is why we post the available openings for various government
        positions for you to look at, search through, and apply.All job postings
        are updated regularly and are authentic in their nature. Our sources for
        these openings include direct government websites as well as local
        newspapers from across different Indian states.With each job posting, we
        also post the skill set and the pre-requisites of education and physical
        compatibility that is required. This saves your time in searching for
        these criteria and often, saves the trouble of applying if a post s not
        suitable to your current credentials. We ensure that the process of the
        job-hunt, sifting through various postings and spotting relevant posts
        is easy and trouble-free for our users.For further ease, the job posting
        at Jobs Alrt have been posted and arranged categorically. This means
        that government openings for jobs that require engineers are bundled
        separately, and those that require professors are bundled separately for
        example. This helps the users in identifying the cadre and the field
        they want to apply for, and then proceed accordingly. It also allows
        less clutter on the website, which helps you as a user in spotting
        important and relevant job postings easily.We also offer you the service
        of subscribing to our website. This subscription will deliver all new
        job openings in your mail-inbox, thus keeping you updated and abreast
        with the latest opportunities that are available. An email service is
        also a favorable option because it can be accessed anytime through a
        smartphone.Jobs Alrt is an ideal place to start your journey towards
        landing an Indian government job – a job which will not only impact your
        present but will change your future. At the same time, the job will also
        help you change the country’s future for the better!Contact Us
      </p>
    </PageLayout>
  );
};

export default AboutUs;
