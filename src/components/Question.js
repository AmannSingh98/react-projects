import React, { useContext } from 'react';
import { GithubContext, LeetcodeContext } from '../context/context';
import styled from 'styled-components';

const Question = () => {
  const { leetcodeDailyQuestion } = useContext(LeetcodeContext);
  const { difficulty, questionLink, questionId, questionTitle } =
    leetcodeDailyQuestion;
  return (
    <Wrapper>
      <div className="question">
        <header>
          <h3>
            {questionId}. {questionTitle}
          </h3>
        </header>
        <p>easy</p>
        <a href={questionLink}>Solve Problem</a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--clr-white);
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;

  &::before {
    content: ' Daily Problem';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  .question {
    /* overflow: scroll; */
    height: 260px;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    header {
      display: flex;
      /* img {
        height: 100%;
        width: 45px;
        border-radius: 50%;
        object-fit: cover;
      } */
      h3 {
        font-size: 24px;
        line-height: 30px;
        font-weight: 600;
        font-family: var(--ff-primary);
      }
    }

    p {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      border-radius: 1rem;
      padding: 0.1rem 0.1rem;
      width: 100%;
      max-width: 50px;
    }
    a {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      border-radius: 1rem;
      padding: 0.25rem 0.75rem;
      width: 100%;
      max-width: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export default Question;
