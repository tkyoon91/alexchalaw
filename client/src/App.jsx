import React, { Component } from 'react';
import NavigationBar from './common/NavigationBar';
import { BrowserRouter } from 'react-router-dom';
import Routes from './common/Routes';
import Footer from './common/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavigationBar />
              <Routes/>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;