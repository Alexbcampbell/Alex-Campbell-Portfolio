import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Swal from 'sweetalert2';

import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
} from '@material-ui/core';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ContactPage extends Component {
  state = {
    newContact: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      comments: '',
    },
  };

  handleInputChangeFor = (input) => (event) => {
    this.setState({
      newContact: {
        ...this.state.newContact,
        [input]: event.target.value,
      },
    });
  };

  addNewContact = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'POST_CONTACT',
      payload: this.state.newContact,
    });
    this.setState({
      newContact: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        comments: '',
      },
    });
    Swal.fire({
      title: 'Contact Information Sent',
      text: 'Thank you! You will be contacted as soon as possible!',
      icon: 'success',
    });
    this.props.history.push('/home');
  };

  render() {
    return (
      <div>
        <div>
          <Container style={{ padding: '75px' }}>
            <Grid container justify="center">
              <Grid item>
                <form className="opacity" onSubmit={this.addNewContact}>
                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    style={{ color: 'white' }}
                  >
                    Leave your contact information and I will get back to you as
                    soon as possible!
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={3}>
                      <TextField
                        style={{ backgroundColor: 'gray' }}
                        fullWidth
                        // multiline
                        // rows={4}
                        placeholder="First Name"
                        type="text"
                        name="first name"
                        value={this.state.firstName}
                        required
                        variant="outlined"
                        onChange={this.handleInputChangeFor('firstName')}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        style={{ backgroundColor: 'gray' }}
                        fullWidth
                        // multiline
                        // rows={4}
                        placeholder="Last Name"
                        type="text"
                        name="Last Name"
                        value={this.state.lastName}
                        required
                        variant="outlined"
                        onChange={this.handleInputChangeFor('lastName')}
                      />
                    </Grid>
                    <Grid container spacing={3}>
                      <Grid item xs={3}>
                        <TextField
                          style={{ backgroundColor: 'gray' }}
                          fullWidth
                          // multiline
                          // rows={4}
                          placeholder="Email"
                          type="text"
                          name="Email"
                          value={this.state.email}
                          required
                          variant="outlined"
                          onChange={this.handleInputChangeFor('email')}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                          style={{ backgroundColor: 'gray' }}
                          fullWidth
                          // multiline
                          // rows={4}
                          placeholder="Phone Number"
                          type="text"
                          name="Phone Number"
                          value={this.state.phoneNumber}
                          required
                          variant="outlined"
                          onChange={this.handleInputChangeFor('phoneNumber')}
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        style={{ backgroundColor: 'gray' }}
                        fullWidth
                        multiline
                        rows={2}
                        placeholder="Do you have any comments you would like to add?"
                        type="text"
                        name="comments"
                        value={this.state.comments}
                        variant="outlined"
                        onChange={this.handleInputChangeFor('comments')}
                        inputProps={{ maxLength: 500 }}
                      />
                    </Grid>

                    <Box m={2}>
                      <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        // name="submit"
                        // value="Register"
                      >
                        Submit
                      </Button>
                    </Box>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ContactPage);
