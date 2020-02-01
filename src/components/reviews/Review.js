import React, { Component } from 'react';

class Review extends Component {


  handleOnClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    
    return (
      <div>
        <li>
          {this.props.review.review}
          <button onClick={this.handleOnClick}> x </button>
        </li>
        
      </div>
    );
  }

};

export default Review;