
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {

  switch (action.type) {

    case 'ADD_RESTAURANT':
    console.log("add restaurant reducer", action)


    const restaurant = {
      text: action.text,
      id: cuid()
    }

    return {restaurants: state.restaurants.concat(restaurant)}

    case 'DELETE_RESTAURANT':
    console.log("delete restaurant", action)

    return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}

    default:
      return state

  }
}
