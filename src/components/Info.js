import React, { useContext } from 'react';
import { GithubContext, LeetcodeContext } from '../context/context';
import styled from 'styled-components';
import { GiRank3 } from 'react-icons/gi';
import { TbStars } from 'react-icons/tb';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers } from 'react-icons/fi';

const UserInfo = () => {
  const { leetcodeUserInfo } = useContext(LeetcodeContext);
  const {
    ranking,
    totalSolved,
    acceptanceRate,
    contributionPoints,
    reputation,
  } = leetcodeUserInfo;
  const items = [
    {
      id: 1,
      icon: <GiRank3 className="icon" />,
      label: 'rank',
      value: ranking,
      color: 'red',
    },
    {
      id: 2,
      icon: <GoGist className="icon" />,
      label: 'solved',
      value: totalSolved,
      color: 'green',
    },
    {
      id: 3,
      icon: <GoRepo className="icon" />,
      label: 'acceptance rate',
      value: acceptanceRate,
      color: 'yellow',
    },

    {
      id: 4,
      icon: <FiUsers className="icon" />,
      label: 'contribution',
      value: contributionPoints,
      color: 'purple',
    },
    {
      id: 5,
      icon: <TbStars className="icon" />,
      label: 'reputation',
      value: reputation,
      color: 'green',
    },
  ];
  return (
    <section className="section">
      <Wrapper className="section-center">
        {items.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </Wrapper>
    </section>
  );
};

const Item = ({ id, icon, label, value, color }) => {
  return (
    <article className="item">
      <span className={color}>{icon}</span>
      <div>
        {id !== 3 ? <h3>{value}</h3> : <h3>{value}%</h3>}
        <p>{label}</p>
      </div>
    </article>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 2rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 2rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .red {
      background: #ffcccc;
      color: #ff6666;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #ffd699;
      color: #ff9900;
    }
  }
`;

export default UserInfo;
