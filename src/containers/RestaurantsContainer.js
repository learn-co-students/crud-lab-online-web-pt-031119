import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {


    // const renderRestaurants = () => {return this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} deleteRestaurant={this.props.deleteRestaurant} restaurant={restaurant} addRestaurant={this.props.addRestaurant} />)}

    const { addRestaurant, deleteRestaurant } = this.props

    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant} deleteRestaurant={deleteRestaurant} />
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant} />

      </div>
    )
  }
}

  const mapStateToProps = ({ restaurants }) => ({ restaurants })

  // const mapStateToProps = state => {
  //   return {restaurants: state.restaurants}
  // }

  const mapDispatchToProps = dispatch => ({
    addRestaurant: text => dispatch({ type: "ADD_RESTAURANT", text }),
    deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id})
  })

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
