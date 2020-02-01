
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
    }, action) {
        switch (action.type) {
            case 'ADD_RESTAURANT':
                const restaurant = {text: action.text, id: cuidFn()};
                return { 
                    ...state, 
                    restaurants: [...state.restaurants, restaurant]
                    }
            case 'DELETE_RESTAURANT':
                const restaurants = state.restaurants.filter(rest => rest.id !== action.payload.id)
                        
                return { ...state, restaurants};

            case 'ADD_REVIEW':
                console.log(action.review.restaurantId)
                const review = {restaurantId: action.review.restaurantId, review: action.review.text, id: cuidFn() }
                                
                return {
                    ...state,
                    reviews: [...state.reviews, review]
                }

            case 'DELETE_REVIEW':
                debugger
                const reviews = state.reviews.filter(rest => rest.id !== action.id)
                return {...state, reviews };
            
            default:
                
                 return state;
        }




}


