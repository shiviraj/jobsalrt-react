import React from 'react';
import styled from 'styled-components';
import Jobs from './utils/Jobs';

const Sections = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 16px 8px;
`;

const Category = () => {
  return (
    <Sections>
      <Jobs title="Latest Jobs" />
      <Jobs title="Admit Card" />
      <Jobs title="Results" />
      <Jobs title="Answer Key" />
      <Jobs title="Syllabus" />
      <Jobs title="Admission" />
    </Sections>
  );
};

export default Category;
