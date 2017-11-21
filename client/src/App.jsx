import React, { Component } from 'react';
import NavigationBar from './common/NavigationBar';
import { BrowserRouter } from 'react-router-dom';
import Routes from './common/Routes';
import Footer from './common/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;