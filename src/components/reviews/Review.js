import React, { Component } from 'react';

class Review extends Component {

  render() {
    const review = this.props
    debugger
    return (
      <div>
        <li>
          {review.review.text}
        <button onClick={() => review.delete(review.review.id)}> X </button>
        </li>
      </div>
    )} 
    // else {
    //   return <div></div>
    // }
  }



export default Review;
