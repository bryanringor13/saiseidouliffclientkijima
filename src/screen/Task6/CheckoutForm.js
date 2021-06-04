import React, { useEffect } from 'react';
import { ElementsConsumer, CardElement } from '@stripe/react-stripe-js';

import CardSection from './CardSection';

class CheckoutForm extends React.Component {
  handleSubmit = async event => {
    event.preventDefault();

    const min = 1;
    const max = 1000;
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;

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
    }

    const reqPayment = stripe.paymentRequest({
      country: 'JP',
      currency: 'jpy',
      total: {
        label: 'Demo Amount',
        amount: rand
      }
    });

    if (reqPayment.error) {
      console.log('Failed : ', reqPayment.error.message);
    } else {
      console.log('Success', rand);
    }

    const sendMessage = async () => {
      liff
        .sendMessages([
          {
            type: 'text',
            text: `https://liff.line.me/1656043326-pMq6BjwJ/task6/?payment=${rand}`
          }
        ])
        .then(function() {
          console.log('Success Sending Message');
          liff.closeWindow();
        })
        .catch(error => {
          console.log('sendMessages: ', error);
        });
    };

    sendMessage();
  };

  render() {
    return (
      <div>
        <div className="product-info">
          <h3 className="product-title">Stripe Payment</h3>
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
