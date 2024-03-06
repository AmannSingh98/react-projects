import React, { useState, useEffect, createContext } from 'react';
import mockUserInfo from './mockData.js/mockUserInfo';
import mockUserBio from './mockData.js/mockUserBio';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';
import mockDailyQuestion from './mockData.js/mockDailyQuestion';

const Jeremy_Url = 'leetcode-stats-api.herokuapp.com';
const Alfa_Url = 'https://alfa-leetcode-api.onrender.com';

const LeetcodeContext = createContext(); // Consumer, Provider -> GithubContext.value

const LeetcodeProvider = ({ children }) => {
  const [leetcodeUserInfo, setLeetcodeUserInfo] = useState(mockUserInfo);
  const [leetcodeUserBio, setLeetcodeUserBio] = useState(mockUserBio);
  const [leetcodeDailyQuestion, setLeetcodeDailyQuestion] =
    useState(mockDailyQuestion);
  return (
    <LeetcodeContext.Provider
      value={{ leetcodeUserInfo, leetcodeUserBio, leetcodeDailyQuestion }}
    >
      {children}
    </LeetcodeContext.Provider>
  );
};

export { LeetcodeProvider, LeetcodeContext };
