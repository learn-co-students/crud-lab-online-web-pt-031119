import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    debugger
    const { restaurant, deleteRestaurant } = this.props;

    return (


      <div>
          <li>
            {this.props.restaurant.text}
            {console.log(this.props)}
            <button onClick={() => this.props.deleteRestaurant(this.props.restaurant.id)}>DELETE</button>
            <ReviewsContainer restaurant={this.props.restaurant} />
          </li>
      </div>

    );
  }
};

export default Restaurant;
