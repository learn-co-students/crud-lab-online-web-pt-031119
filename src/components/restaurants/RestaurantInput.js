import React, { Component } from 'react';

class RestaurantInput extends Component {
  
  constructor() {
      super();
      this.state = {
        text: ''
      }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }
  
  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label> 
            Resturant Name:
            <input type="text" name="text" id="text" value={this.state.text} onChange={event => this.handleChange(event)} />
          </label>
          <input type="submit" value="Submit"  />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
