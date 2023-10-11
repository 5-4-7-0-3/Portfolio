import React, { useState } from 'react';
import './css/App.css';
import Header from './components/Header';
import Contacts from './components/Contacts';
import EndLoader from './components/EndLoader';
import Loader from './components/Loader.js';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingFinished = () => {
    setIsLoading(false);
  };

  return (
    <div className="container">
      {isLoading ? (
        <Loader onLoadingFinished={handleLoadingFinished} />
      ) : (
        <div>
          <EndLoader></EndLoader>
          <header>
            <Contacts />
            <Header />
          </header>
          <body>
            <Skills></Skills>
            <Projects></Projects>
          </body>
          <footer>
            <Footer></Footer>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
