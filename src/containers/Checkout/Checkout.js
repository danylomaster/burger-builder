import React, { Component } from "react";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  };
  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default Checkout;

// import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

// import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
// import ContactData from './ContactData/ContactData';

// class Checkout extends Component {

//     checkoutCancelledHandler = () => {
//         this.props.history.goBack();
//     }

//     checkoutContinuedHandler = () => {
//         this.props.history.replace( '/checkout/contact-data' );
//     }

//     render () {
//         let summary = <Redirect to="/" />
//         if ( this.props.ings ) {
//             const purchasedRedirect = this.props.purchased ? <Redirect to="/"/> : null;
//             summary = (
//                 <div>
//                     {purchasedRedirect}
//                     <CheckoutSummary
//                         ingredients={this.props.ings}
//                         checkoutCancelled={this.checkoutCancelledHandler}
//                         checkoutContinued={this.checkoutContinuedHandler} />
//                     <Route
//                         path={this.props.match.path + '/contact-data'}
//                         component={ContactData} />
//                 </div>
//             );
//         }
//         return summary;
//     }
// }

// const mapStateToProps = state => {
//     return {
//         ings: state.burgerBuilder.ingredients,
//         purchased: state.order.purchased
//     }
// };

// export default connect( mapStateToProps )( Checkout );
