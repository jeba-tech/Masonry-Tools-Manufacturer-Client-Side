import React from 'react';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner';
import Footer from './Footer';
import About from '../About/About';
import Contact from './Contact';

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <About></About>
                  <Reviews></Reviews>
                  <Contact></Contact>
                  <Footer></Footer>
            </div>
      );
};

export default Home;