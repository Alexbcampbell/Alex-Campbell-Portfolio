import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
import { withStyles, createStyles } from '@material-ui/core/styles';

const muiStyles = (theme) =>
  createStyles({
    // avatar: {
    //   backgroundColor: blue[100],
    //   color: blue[600],
    // },
    cardMedia: {
      height: '300px',
      [theme.breakpoints.down('sm')]: {
        height: '50%',
        width: '300px',
      },
    },
  });

class ProjectListItem extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_PROJECT',
      payload: this.props.store.project,
    });
  }

  // handleClickDetails = (event) => {
  //   this.props.dispatch({
  //     type: 'GET_EVENT_DETAILS',
  //     payload: this.props.id,
  //   });
  //   this.props.history.push(`/event/details/${this.props.event.event_id}`);
  // };

  // const useStyles = makeStyles({
  //   card: { maxWidth: 345, },
  //   media: { height: 140, }, });

  render() {
    const { project } = this.props;

    return (
      <div class="item-port">
        <Card className="card">
          <CardHeader avatar={<Avatar>P</Avatar>} title={project.projectName} />
          <CardContent>
            <CardMedia
              className={this.props.classes.cardMedia}
              image={project.photo}
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
}

export default withRouter(connect()(withStyles(muiStyles)(ProjectListItem)));
