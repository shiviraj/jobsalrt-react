import React from 'react';
import styled from 'styled-components';

const Statement = styled.p`
  color: #333;
  padding: 4px 16px;
  text-align: justify;
  &:first-letter {
    font-size: 32px;
  }
`;

const FooterLayout = styled.footer`
  background-color: #0c4da2;
`;

const SectionLayout = styled.section`
  display: flex;
  justify-content: space-around;
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

const AuthorLayout = styled.div`
  background-color: #0c4da2;
  display: flex;
  justify-content: flex-end;
  padding: 16px 24px;
`;

const Author = styled.p`
  color: #ccc;
  font-weight: 500;
  & span {
    color: #fff;
    font-weight: 200;
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
            <a href="/page/about-us">About Us</a>
            <a href="/page/terms-of-service">Terms of Services</a>
            <a href="/page/privacy-policy">Privacy Policy</a>
          </Section>
          <Section>
            <h3>Navigation</h3>
            <a href="/page/contact-us">Contact Us</a>
            <a href="/page/share-feedback">Share Feedback</a>
          </Section>
          <Section>
            <h3>Connect with Us</h3>
            <a href="/connect/facebook">Facebook</a>
            <a href="/connect/twitter">Twitter</a>
            <a href="/connect/instagram">Instagram</a>
          </Section>
        </SectionLayout>
        <AuthorLayout>
          <Author>
            <span>Theme developed by:</span> Shivam Rajput
          </Author>
        </AuthorLayout>
      </FooterLayout>
    </div>
  );
};

export default Footer;
