
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {

  switch (action.type) {

    case 'ADD_RESTAURANT':


    const restaurant = {
      text: action.text,
      id: cuid()
    }

    return {restaurants: state.restaurants.concat(restaurant)}

    case 'DELETE_RESTAURANT':
    debugger
    const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)

    return {...state, restaurants}


    const review = {
      text: action.text,
      id: cuid(),
      restaurant_id: restaurant.id
    }

    case 'ADD_REVIEW':
    console.log("add review reducer", action)

    return {reviews: state.reviews.concat(review)}

    case 'DELETE_REVIEW':
    console.log("delete review reducer", action)

    return {reviews: state.restaurants.reviews.filter(review => review.id !== action.id && review.restaurant_id !== action.id)}

    default:
      return state

  }
}

//add actions for reviews
