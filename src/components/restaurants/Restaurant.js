import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <ReviewsContainer restaurant={restaurant}/>
          <button>DELETE</button>
        </li>
      </div>
    );
  }
};

export default Restaurant;
