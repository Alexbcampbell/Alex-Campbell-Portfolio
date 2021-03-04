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
const soloScreen = require('./Screen Shot 2021-01-31 at 7.04.02 PM.png');

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
        <Card className="card">
          <CardHeader
            avatar={<Avatar>C</Avatar>}
            title="Covid Restaurant Reviews"
          />
          <CardContent>
            <CardMedia image={soloScreen} />
          </CardContent>
        </Card>
        {/* <Grid container spacing={3}>
          {projectArray}
        </Grid> */}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PortfolioPage);
