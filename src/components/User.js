import React, { useContext } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Question from './Question';
import { LeetcodeContext } from '../context/context';
const User = () => {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <Card />
        <Question />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  padding-top: 2rem;

  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  align-items: start;
`;

export default User;
