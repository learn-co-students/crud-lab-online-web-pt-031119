
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':

            const restaurant = {
                id: cuid(),
                text: action.text
            }
            // debugger
         return {...state, restaurants: [...state.restaurants, restaurant]}
        
         case 'DELETE_RESTAURANT':
         
         return {restaurants: state.restaurants.filter(r => r.id !== action.id)}

         case 'ADD_REVIEW':
             const review = {
                 id: cuid(),
                 text: action.review.text,
                 restaurantId: action.review.restaurantId
             }
            // debugger
            return {...state, reviews: [...state.reviews, review]}

         case 'DELETE_REVIEW':
            debugger
         return {...state, reviews: state.reviews.filter(r => r.id !== action.id)}
            
        default:
            return state;
    }
}
