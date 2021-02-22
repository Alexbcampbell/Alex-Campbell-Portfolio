import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';
const alexPic = require('./alex1_bw.png');

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="item">
          <img className="profile" src={alexPic} alt="black and white" />
        </div>
        <div className="item-bio">
          <p>
            {' '}
            Full Stack Software Engineer | Learning to code for a better
            tomorrow.
          </p>
        </div>
        <div className="item">
          <div>
            <a href="https://www.linkedin.com/in/alexb-campbell/">LinkedIn</a>
          </div>
          <div>
            <a href="https://github.com/Alexbcampbell">Github</a>
          </div>
          <div>
            <a href="alexbe.campbell@gmail.com">E-mail</a>
          </div>
          <div>
            <span>913-710-9196</span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
