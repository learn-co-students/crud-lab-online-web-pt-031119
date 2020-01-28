
import cuid from 'cuid';


export default function manageRestaurants(state={restaurants:[],reviews:[]}, action) {
  switch(action.type){
    case 'ADD_RESTAURANT':
      let restaurant = {text: action.text, id: cuid()}
      return{...state,restaurants:[...state.restaurants,restaurant]}

    case 'DELETE_RESTAURANT':
      let restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return {...state,restaurants}

    case 'ADD_REVIEW':
      let review = {text: action.text, restaurantId: action.restaurantId, id: cuid()}
      return{...state,reviews:[...state.reviews,review]}

    default:
      return state
  }
}
