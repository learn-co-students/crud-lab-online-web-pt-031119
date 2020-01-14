import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addReview(text: this.state.text, restaurantId: this.state.restaurant.id)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        Review Input
        <form>
          <input type="input" onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" onSubmit={(event) => this.handleOnSubmit(event)} />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
