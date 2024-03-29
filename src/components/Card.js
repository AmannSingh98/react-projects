import React, { useContext } from 'react';
import { GithubContext, LeetcodeContext } from '../context/context';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
const Card = () => {
  const { leetcodeUserBio } = useContext(LeetcodeContext);
  const { name, avatar, username, skillTags, country, company, about } =
    leetcodeUserBio;

  return (
    <Wrapper>
      <header>
        <img src={avatar} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>@{username}</p>
        </div>
      </header>
      <p className="bio">
        {' '}
        {(about.length > 50 && `${about.slice(0, 80)}...`) ||
          `Let's code and make this world a beautiful place for coders (Bio....)`}
      </p>
      <div className="links">
        <p>
          <MdBusiness></MdBusiness> {company || 'Company (Not Mentioned)'}
        </p>
        <p>
          <MdLocationOn></MdLocationOn> {country || 'Location (Not Mentioned)'}
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  background: var(--clr-white);
  /* max-width: 500px;
  width: 100%; */
  padding: 2rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    content: 'Coder';
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
  header {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 2rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
    }
  }
  .bio {
    color: var(--clr-grey-3);
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-primary-3);
      }
    }
  }
`;
export default Card;
