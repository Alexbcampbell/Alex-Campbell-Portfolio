import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {
  Button,
} from '@material-ui/core';

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
            Application Support Developer @ Prodjex | Coding for a better 
            tomorrow
          </p>
        </div>
        <div className="item">
        <div>
          <Button size="medium" variant="outlined" color="primary" href="https://docs.google.com/document/d/1iMtxe9IJxU7W9o9JqHkZgI5v7A6tl7Qe5QnJT2DJu9U/edit?usp=sharing">
            Resume
          </Button>
            {/* <a href="https://docs.google.com/document/d/1iMtxe9IJxU7W9o9JqHkZgI5v7A6tl7Qe5QnJT2DJu9U/edit?usp=sharing">Resume</a> */}
          </div>
          <div>
          <Button size="medium" variant="outlined" color="primary" href="https://www.linkedin.com/in/alexb-campbell/">
            LinkedIn
          </Button>
            {/* <a href="https://www.linkedin.com/in/alexb-campbell/">LinkedIn</a> */}
          </div>
          <div>
          <Button size="medium" variant="outlined" color="primary" href="https://github.com/Alexbcampbell">
            Github
          </Button>
            {/* <a href="https://github.com/Alexbcampbell">Github</a> */}
          </div>
          <div>
          <Button size="medium" variant="outlined" color="primary" href="alexbe.campbell@gmail.com">
          E-mail
          </Button>
            {/* <a href="alexbe.campbell@gmail.com">E-mail</a> */}
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
