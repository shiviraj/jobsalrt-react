import React from 'react';
import styled from 'styled-components';

const Statement = styled.p`
  color: #333;
  padding: 4px 16px;
  text-align: justify;
  &:first-letter {
    font-size: 32px;
  }
  @media only screen and (max-width: 420px) {
    & {
      padding: 4px 8px;
    }
  }
`;

const FooterLayout = styled.footer`
  background-color: #0c4da2;
  padding-bottom: 16px;
`;

const SectionLayout = styled.section`
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 420px) {
    & {
      flex-direction: column;
      padding: 0 16px;
    }
  }
`;

const Section = styled.section`
  & h3 {
    color: #fff;
    padding: 16px 0;
    padding-bottom: 8px;
    font-weight: 500;
  }
  & a {
    display: block;
    color: #c4c4c4;
    text-decoration: none;
    padding-left: 16px;
    line-height: 20px;
  }
  & a:hover {
    color: #eee;
  }
  & a:before {
    content: '• ';
  }
`;

const Footer = () => {
  return (
    <div>
      <Statement>
        JobsAlrt is one of the best government jobs website in India. At
        jobsAlrt we try to bring only those things that are 100% genuine
        (checked by our team) and useful for our users. If you are new on
        jobsAlrt and want to check current govt jobs updates or other alert like
        written exam results, admit cards, syllabus, admissions, answer key on
        your mobile then you can bookmark jobalrt and create your account or
        keep visiting our site for fresh content. JobsAlrt is trying to bring
        innovative features for our users, like use of filters to find jobs
        easily, alerts on your mobile for a particular job and many more. Hope
        you will find JobsAlrt's efforts useful and will keep supporting us.{' '}
        <span role="img" aria-label="smile">
          🙂
        </span>
      </Statement>
      <FooterLayout>
        <SectionLayout>
          <Section>
            <h3>Important Links</h3>
            <a href="/page/disclaimer">Disclaimer</a>
            <a href="/page/terms-of-service">Terms of Services</a>
            <a href="/page/privacy-policy">Privacy Policy</a>
          </Section>
          <Section>
            <h3>Navigation</h3>
            <a href="/page/about-us">About Us</a>
            <a href="/page/contact-us">Contact Us</a>
            <a href="/page/share-feedback">Share Feedback</a>
          </Section>
          <Section>
            <h3>Connect with Us</h3>
            <a
              href="https://www.facebook.com/alrt.jobsalrt/?modal=admin_todo_tour"
              target="_blank"
            >
              Facebook Page
            </a>
            <a
              href="https://www.facebook.com/groups/2677640842448736/?ref=bookmarks"
              target="_blank"
            >
              Facebook Group
            </a>
            <a href="https://twitter.com/ShivamR31533404" target="_blank">
              Twitter
            </a>
            <a href="https://www.instagram.com/alrt.jobsalrt/" target="_blank">
              Instagram
            </a>
          </Section>
        </SectionLayout>
      </FooterLayout>
    </div>
  );
};

export default Footer;
