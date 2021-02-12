import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ContactPage extends Component {
  state = {
    newContact: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      comments: '',
    },
  };

  render() {
    return (
      <div>
        <h2>
          Leave your contact information and I will get back to you as soon as
          possible!
        </h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ContactPage);
