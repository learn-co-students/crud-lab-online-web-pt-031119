
import cuid from 'cuid';

export default function manageRestaurants(state={restaurants:[]}, action) {
  switch(action.type){
    case 'ADD_RESTAURANT':
      let restaurant = {text: action.text, id: cuid()}
      debugger
      return{...state,restaurants:[...state.restaurants,restaurant]}
    case 'DELETE_RESTAURANT':
      let restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return {...state,restaurants}
    default:
      return state
  }
}
