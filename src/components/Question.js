import React, { useContext } from 'react';
import { GithubContext, LeetcodeContext } from '../context/context';
import styled from 'styled-components';

const Question = () => {
  const { leetcodeDailyQuestion } = useContext(LeetcodeContext);
  const { topicTags, difficulty, questionLink, questionId, questionTitle } =
    leetcodeDailyQuestion;
  return (
    <Wrapper>
      <div className="question">
        <header>
          <h3>
            {questionId}. {questionTitle}
          </h3>
        </header>
        <p>
          <span>easy</span>

          {topicTags.map((tag) => {
            return <span>{tag.name}</span>;
          })}
        </p>

        <a href={questionLink} target="_blank">
          Solve Problem
        </a>
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
    height: 255px;
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;

    header {
      display: flex;
      /* img {
        height: 100%;
        width: 45px;
        border-radius: 50%;
        object-fit: cover;
      } */
    }
    h3 {
      font-size: 20px;
      line-height: 30px;
      font-weight: 600;
      font-family: var(--ff-primary);
      margin-bottom: 0.75rem;
    }
    p {
      margin: 0;
      margin-bottom: 4rem;
    }
    span {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      border-radius: 1rem;
      padding: 0.25rem 0.75rem;
      width: fit-content;
      font-size: 12px;
      margin-bottom: 0.5rem;
      margin-right: 0.5rem;
    }
    a {
      color: #00cc00;
      background: #e6ffe6;
      border-radius: 1rem;
      padding: 0.5rem 1.25rem;
      width: fit-content;
      font-size: 16px;
      font-weight: 600;
      margin: 0 auto;
      transform: translatey(50%);
      &:hover {
        color: #00e600;
        background: #c2f0c2;
      }
    }
  }
`;
export default Question;
