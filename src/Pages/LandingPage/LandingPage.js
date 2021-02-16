import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
