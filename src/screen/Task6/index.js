import React from 'react';
import './style.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { STRIPE_API_KEY } from '../../utils/const';

const stripePromise = loadStripe(STRIPE_API_KEY);

const Task6 = () => {
  return (
    <div className="App">
      <div className="product">
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Task6;
