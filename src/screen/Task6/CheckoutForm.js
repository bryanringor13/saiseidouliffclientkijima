import React from 'react';
import { ElementsConsumer, CardElement } from '@stripe/react-stripe-js';

import CardSection from './CardSection';

class CheckoutForm extends React.Component {
  handleSubmit = async event => {
    event.preventDefault();

    const { stripe, elements } = this.props;
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log(result.token);
      const reqPayment = await stripe.paymentRequest({
        country: 'JP',
        currency: 'JPY',
        total: {
          label: 'Total',
          amount: 1000
        },
        requestPayerName: true,
        requestPayerEmail: true
      });

      if (reqPayment.error) {
        console.log(reqPayment.error.message);
      } else {
        console.log(reqPayment.token);
      }
    }
  };

  render() {
    return (
      <div>
        <div className="product-info">
          <h3 className="product-title">Test 6 Stripe Payment</h3>
        </div>
        <form onSubmit={this.handleSubmit}>
          <CardSection />
          <button disabled={!this.props.stripe} className="btn-pay">
            Pay
          </button>
        </form>
      </div>
    );
  }
}

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}
