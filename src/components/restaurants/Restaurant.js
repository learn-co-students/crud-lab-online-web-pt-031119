import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  handleOnClick = () => {
    debugger
    // event.preventDefault();
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    debugger
    const { restaurant, deleteRestaurant } = this.props;

    return (


      <div>
          <li>
            {restaurant.text}
            <button onClick={() => this.handleOnClick()}> X </button>
            <ReviewsContainer restaurant={restaurant} />
          </li>
      </div>

    );
  }
};

export default Restaurant;
