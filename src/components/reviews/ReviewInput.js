import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const data = {
      ...this.state, 
      restaurantId: this.props.restaurantId
    }
    this.props.postReview(data)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form id="new-review-form" onSubmit={this.handleSubmit}>
          <label htmlFor="new-review">Post a review: </label>
          <input type="text" value={this.state.text} id="new-review" onChange={this.handleChange} />
          <input type="submit" onClick={this.handleSubmit} value="Submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
