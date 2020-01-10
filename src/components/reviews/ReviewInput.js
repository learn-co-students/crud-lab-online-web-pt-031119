import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleSubmit = event => {
    console.log(this.props.addReview)
    event.preventDefault();
    this.props.addReview({
      text: this.state.text, 
      restaurantId: this.props.restaurantId})
    this.setState({text: ''})
  }

  handleChange = event => {
    this.setState({
      text: event.target.value,
    });
  }


  render() { 
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>review restaurant {this.props.restaurandID}</label><br></br>
          <input type="text" onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
