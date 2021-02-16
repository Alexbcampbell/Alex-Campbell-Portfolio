import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './PortfolioPage.css';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PortfolioPage extends Component {
  render() {
    return (
      <div className="container-portfolio">
        <div class="item-port">1</div>
        <div class="item-port">2</div>
        <div class="item-port">3</div>
        <div class="item-port">4</div>
        <div class="item-port">5</div>
        <div class="item-port">6</div>
        <div class="item-port">7</div>
        <div class="item-port">8</div>
        <div class="item-port">9</div>
        <div class="item-port">10</div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PortfolioPage);
