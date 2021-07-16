import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Grid,
  CardHeader,
  Avatar,
} from '@material-ui/core';

import './PortfolioPage.css';
import ProjectListItem from '../../components/ProjectListItem/ProjectListItem';
const soloScreen = require('./soloScreenHome.png');

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('help')
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
        {this.classList.toggle('open')};
      </button>
    );
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_PROJECT',
      payload: this.props.store.project,
    });
  }

  panels = document.querySelectorAll('.panel');

    onSubmit = (input) => (e) => { 
      console.log('Hello');
      this.classList.toggle('open');
    }

    toggleActive = (input) => (e) => {
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }

    // panels.forEach(panel => panel.addEventListener('click', onSubmit));
    // panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

  render() {
    const { project } = this.props;
    // const projectArray = this.props.store.portfolioReducer.map(
    //   (item, index) => {
    //     return (
    //       <Grid item sm={12} md={4} lg={4}>
    //         <ProjectListItem
    //           id={item.id}
    //           key={index}
    //           project={item}
    //           index={index}
    //         />
    //       </Grid>
    //     );
    //   }
    // );
    return (
      
      <div className="container-portfolio">
        <div class="panels">
    <div class="panel panel1" onClick ={this.handleClick}>
      <p></p>
    <p>Covid <br></br>Restaurant<br></br> Reviews</p>
    <p></p>
    </div>
    <div class="panel panel2" onSubmit>
    <p>WeCodeKC</p>
    <p></p>
    <p></p>
    </div>
    <div class="panel panel3" onSubmit>
    <p>Wes Bos's</p>
    <p>30-Day</p>
    <p>Javascript Challenge</p>
    </div>
  </div>
  </div>
    );
  }
}

export default connect(mapStoreToProps)(PortfolioPage);
