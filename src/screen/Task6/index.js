import React from 'react';
import './style.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51HMF25JPSBMaR4pxhzGJ7SATznEwC7eMAstrSLD44KZfjgfOv40yCtFCQf9VSRkODsW7XVbRQXRlM98fbF3Qonr100UaC9igSM'
);

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
