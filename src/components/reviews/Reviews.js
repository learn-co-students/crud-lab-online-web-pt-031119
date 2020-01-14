import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        Reviews
        {console.log(this.props)}
      </ul>
    );
  }
};

export default Reviews;
