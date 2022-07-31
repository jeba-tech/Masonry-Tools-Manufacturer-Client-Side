import React from 'react';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner';
import Footer from './Footer';
import About from '../About/About';
import Contact from './Contact';
import Questions from '../Questions/Questions';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Tools from '../Tools/Tools';

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <About></About>
                  <BusinessSummary></BusinessSummary>
                  <Tools></Tools>
                  <Reviews></Reviews>
                  <Questions></Questions>
                  <Contact></Contact>
                  <Footer></Footer>
            </div>
      );
};

export default Home;