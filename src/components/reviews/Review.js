import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props
    // if (review){
    return (
      <div>
        <li>
          {review.text}
        <button> X </button>
        </li>
      </div>
    )} 
    // else {
    //   return <div></div>
    // }
  }



export default Review;
