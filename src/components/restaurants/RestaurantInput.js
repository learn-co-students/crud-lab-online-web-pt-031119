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
    this.props.addBand(this.state.text)
    this.setState({
      text: '',
    })
  }


  render() {
    return (
      <div>
        Restaurant Input
        <form>
          <input name="restaurant" onChange={(event) => this.handleOnChange(event)} />
          <button onSubmit={(event) => this.handleOnSubmit(event)} name="restaurant submission" type="submit" content="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
