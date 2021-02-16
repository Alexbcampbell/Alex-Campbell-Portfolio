import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';
const alexPic = require('./alex1_bw.png');

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <div class="item">
          <img class="profile" src={alexPic} alt="black and white" />
        </div>
        <div class="item-bio">
          <p>
            {' '}
            Full Stack Software Engineer | Learning to code for a better
            tomorrow.
          </p>
        </div>
        <div class="item">
          <a href="https://github.com/Alexbcampbell">Github</a>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
