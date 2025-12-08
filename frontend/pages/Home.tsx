
import React from 'react';
import { Hero } from '../components/Home/Hero';
import { Intro } from '../components/Home/Intro';
import { WhyUs } from '../components/Home/WhyUs';
import { Achievements } from '../components/Home/Achievements';
import { PastProjects } from '../components/Home/PastProjects';
import { PracticeAreas } from '../components/Home/PracticeAreas';
import { Testimonials } from '../components/Home/Testimonials';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <WhyUs />
      <Achievements />
      <PastProjects />
      <PracticeAreas />
      <Testimonials />
    </main>
  );
};

export default Home;
