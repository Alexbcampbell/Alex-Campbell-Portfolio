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

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PortfolioPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_PROJECT',
      // payload: this.props.store.projects,
    });
  }

  render() {
    const projectArray = this.props.store.portfolioReducer.map(
      (item, index) => {
        return (
          <div class="item-port">
            <Card className="card">
              <CardHeader
                avatar={<Avatar>P</Avatar>}
                title={item.projectName}
              />
              <CardContent>
                <CardMedia
                  className={this.props.classes.cardMedia}
                  image={item.photo}
                />
              </CardContent>

              {/* <CardActions>
          <Grid container justify="space-evenly">
            <Grid item>
              <Button
                variant="contained"
                size="small"
                color="secondary"
                onClick={this.handleClickDetails}
              >
                Details
              </Button>
            </Grid>
          </Grid>
        </CardActions> */}
            </Card>
          </div>
        );
      }
    );
    return <div className="container-portfolio">{projectArray}</div>;
  }
}

export default connect(mapStoreToProps)(PortfolioPage);
