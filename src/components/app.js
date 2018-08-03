import React, { Component } from 'react';

import LandingPage from './landingpage/landingpage';
import Dashboard from './dashboard/dashboard';

import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <Dashboard />
      </div>
    );
  }
}

export default App;