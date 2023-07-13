import React from 'react';
import CustomerStories from '../component/coverPageComponent/Customerstory';
import Details from '../component/coverPageComponent/Details';
import Features from '../component/coverPageComponent/Features';
import FrequentlyQuestion from '../component/coverPageComponent/FrequentlyQuestions';
import Navbar from '../component/coverPageComponent/Navbar';
import TitleHeader from '../component/coverPageComponent/Titleheader';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <TitleHeader />
      <Features />
      <CustomerStories />
      <FrequentlyQuestion />
      <Details />
    </div>
  );
};
export default Homepage;
