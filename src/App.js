import React, { useEffect } from 'react';

import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';
import PreLoader from './components/PreLoader/PreLoader';
import { preLoaderAnim } from './animations';

const App = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="app">
      <PreLoader />
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
};

export default App;
