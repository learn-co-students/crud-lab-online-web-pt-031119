import React, { Component } from 'react';
import Reviews from './Reviews';
import cuid from 'cuid';

class ReviewInput extends Component {
  
  state = {
    text: ''
  }

  handleOnChange(event){
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit(event){
    event.preventDefault();
    this.props.addReview(this.props.restaurantId, this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    // debugger
    return (
      <div>
        <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
          <input onChange = {(event) => {this.handleOnChange(event)}} value={this.state.text} name='text'></input>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
