import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux';

class RestaurantContainer extends Component {
  
  render() {
    // debugger
    return (
        <div>
      <RestaurantInput addRestaurant={this.props.addRestaurant}/>
      <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    );
  }
}

const addRestaurant = name => {
  return {
    type: 'ADD_RESTAURANT',
    text: name
  }
}

const deleteRestaurant = id => {
  return {
    type: 'DELETE_RESTAURANT',
    id: id
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps,{addRestaurant, deleteRestaurant})(RestaurantContainer)
