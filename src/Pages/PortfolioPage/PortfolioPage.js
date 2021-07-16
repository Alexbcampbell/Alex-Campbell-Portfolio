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
    <div class="panel panel1" onSubmit>
    <Card className="card">
          <CardHeader title="Covid Restaurant Reviews" />
          <CardContent>
            <CardMedia image={soloScreen} />
          </CardContent>
        </Card>
    </div>
    <div class="panel panel2" onSubmit>
    <Card className="card">
          <CardHeader title="WeVolunteerKC" />
          <CardContent>
            <CardMedia image={soloScreen} />
          </CardContent>
        </Card>
    </div>
    <div class="panel panel3" onSubmit>
    <Card className="card">
          <CardHeader title="Wes Bos' 30 Day JavaScript Challenge" />
          <CardContent>
            <CardMedia image={soloScreen} />
          </CardContent>
        </Card>
    </div>
  </div>
  </div>
    );
  }
}

export default connect(mapStoreToProps)(PortfolioPage);
