import React, { Component } from 'react';

class RestaurantInput extends Component {

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
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }


  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input name="restaurant" onChange={(event) => this.handleOnChange(event)} />
          <button name="restaurant submission" type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
