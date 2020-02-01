import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    }
}

handleChange = event => {
  this.setState({
    text: event.target.value
  })
}

handleSubmit = event => {
    event.preventDefault();
    const data = {restaurantId: this.props.restaurantId, text: this.state.text}
    this.props.addReview(data)
    this.setState({
      text: ''
  })
}

  render() {
   

    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label> 
            Add Review:
            <input type="text" name="text" id="text" value={this.state.text} onChange={event => this.handleChange(event)} />
          </label>
          <input type="submit" value="Submit"  />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
