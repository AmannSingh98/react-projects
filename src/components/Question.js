import React, { useContext } from 'react';
import { GithubContext, LeetcodeContext } from '../context/context';
import styled from 'styled-components';
import { BiLike, BiDislike } from 'react-icons/bi';

const Question = () => {
  const { leetcodeDailyQuestion } = useContext(LeetcodeContext);
  const {
    dislikes,
    likes,
    topicTags,
    difficulty,
    questionLink,
    questionId,
    questionTitle,
    id,
  } = leetcodeDailyQuestion;
  const likeConversion = (number) => {
    if (likes < 1000) return number.toString();
    else if (number < 1000000) {
      return Math.floor(number / 1000) + 'k';
    } else {
      return Math.floor(number / 1000000) + 'M';
    }
  };
  return (
    <Wrapper>
      <div className="question">
        <header>
          <h3>
            {questionId}. {questionTitle}
          </h3>
        </header>
        <p>
          <Difficulty>{difficulty} Level</Difficulty>

          {topicTags.map((tag, index) => {
            return <span key={index}>{tag.name}</span>;
          })}
        </p>
        <MainContent>
          <a href={questionLink} target="_blank">
            Solve Problem
          </a>
        </MainContent>

        <Icons>
          <Vote className="green">
            <BiLike /> {likeConversion(likes)}
          </Vote>
          <Vote className="red">
            <BiDislike /> {likeConversion(dislikes)}
          </Vote>
        </Icons>
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
    }
    h3 {
      font-size: 16px;
      line-height: 30px;
      font-weight: 600;
      font-family: var(--ff-primary);
      margin-bottom: 0.25rem;
    }
    p {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      row-gap: 0.25rem;
      margin: 0.25rem;
    }
    span {
      display: grid;
      place-items: center;
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      border-radius: 1rem;
      padding: 0.25rem 0.25rem;
      font-size: 10px;
      margin-right: 0.5rem;
    }
    a {
      color: #00cc00;
      background: #e6ffe6;
      border-radius: 1rem;
      padding: 0.5rem 1.25rem;
      font-size: 14px;
      font-weight: 600;
      &:hover {
        color: #00e600;
        background: #c2f0c2;
      }
    }
  }
`;

const MainContent = styled.section`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Difficulty = styled.span`
  display: grid;
  place-items: center;
  color: var(--clr-primary-5);
  border: 1px solid var(--clr-primary-5);
  border-radius: 1rem;
  padding: 0.25rem 0.25rem;
  font-size: 10px;
`;

const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 2fr));
  .green {
    background: var(--clr-primary-10);
    color: var(--clr-primary-5);
  }

  .red {
    background: #ffcccc;
    color: #ff6666;
  }
`;

const Vote = styled.div`
  font-size: 13px;
  display: grid;
  grid-template-columns: auto auto;
  place-items: center;
  padding: 0.4rem 0.25rem;
  border-radius: 20%;
  margin-right: 0.5rem;
`;

export default Question;
