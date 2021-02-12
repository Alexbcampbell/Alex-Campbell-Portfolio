import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Swal from 'sweetalert2';

import {
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  Chip,
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
      title: 'Contact Information Sent!',
      text: 'You will be contacted as soon as possible!',
      icon: 'success',
    });
    this.props.history.push('/contact');
  };

  render() {
    return (
      <div>
        <h2>
          Leave your contact information and I will get back to you as soon as
          possible!
        </h2>
        <div>
          <Container style={{ padding: '75px' }}>
            <Grid container justify="center">
              <Grid item>
                <form className="opacity" onSubmit={this.addNewContact}>
                  <Typography variant="h4" component="h2" gutterBottom>
                    Leave your contact information and I will get back to you as
                    soon as possible!
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        style={{ backgroundColor: 'white' }}
                        fullWidth
                        multiline
                        rows={4}
                        placeholder="What motivated you to mentor with us?"
                        type="text"
                        name="motivation"
                        value={this.state.motivation_bio}
                        required
                        variant="outlined"
                        onChange={this.handleInputChangeFor('motivation_bio')}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        style={{ backgroundColor: 'white' }}
                        fullWidth
                        multiline
                        rows={4}
                        placeholder="Do you have any previous volunteer experience with other youth serving organizations? Please give a brief description of your role and responsibilities."
                        type="text"
                        name="experience_bio"
                        value={this.state.experience_bio}
                        required
                        variant="outlined"
                        onChange={this.handleInputChangeFor('experience_bio')}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        style={{ backgroundColor: 'white' }}
                        fullWidth
                        multiline
                        rows={2}
                        placeholder="Do you have any other skills you would like to add?"
                        type="text"
                        name="custom_entry_skills"
                        value={this.state.custom_entry_skills}
                        variant="outlined"
                        onChange={this.handleInputChangeFor(
                          'custom_entry_skills'
                        )}
                        inputProps={{ maxLength: 100 }}
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
