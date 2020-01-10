import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
    state = { 
        restaurants: [],
        reviews: []
    }, 
    action) {
        console.log(action)
        
        switch (action.type) {
            case 'ADD_RESTAURANT':
                const newRestaurant = {
                    id: cuid(),
                    text: action.text,
                    reviews: []
                }

                return { 
                    ...state,
                    restaurants: [...state.restaurants, newRestaurant] 
                }
            
            case 'DELETE_RESTAURANT':
                return {
                    ...state,
                    restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)
                }

            case 'ADD_REVIEW':
                let { text, restaurantId } = action.review
                const newReview = {
                    id: cuid(),
                    text,
                    restaurantId
                }
              
                return {
                    ...state,
                    reviews: [...state.reviews, newReview],
                    restaurants: state.restaurants.map(restaurant => {
                        if (restaurant.id === restaurantId) {
                            return {
                                ...restaurant, reviews: [...restaurant.reviews, newReview]
                            }
                        } else return restaurant
                    })
                }
            case 'DELETE_REVIEW':
                restaurantId = action.data.restaurantId
                const reviewId = action.data.reviewId
          
                return {
                    ...state,
                    reviews: state.reviews.filter(review => review.id !== reviewId),
                    restaurants: state.restaurants.map(restaurant => {
                        if (restaurant.id === restaurantId) {
                            return {
                                ...restaurant,
                                reviews: restaurant.reviews.filter(review => review.id !== reviewId)
                            }
                        } else return restaurant
                    })
                }

            default:
                return state
        }
}
