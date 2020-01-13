import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {


  showReviews = () => {
    debugger
    const list = this.props
    if (list.reviews){
    return <ul>{list.reviews.map(r => {
      if(r.restaurantId === list.restaurant.id){
        // console.log(`reviews check ${list.restaurant.id}`)
      return <li><Review review={r} delete={this.props.deleteReview}/></li> 
    }})}</ul>

  }else {
    return <div></div>
  }}

  render () {
    return (
    <ul>
         {this.showReviews()}
    </ul>
    );
  }}


export default Reviews;