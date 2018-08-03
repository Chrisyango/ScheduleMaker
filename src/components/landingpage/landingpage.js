import React, { Component } from 'react';

import TopNav from './topnav';

import '../../styles/landingpage.css';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <TopNav />
      </div>
    );
  }
}

export default LandingPage;