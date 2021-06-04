import React from 'react';
import './style.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { STRIPE_API_KEY } from '../../utils/const';

const stripePromise = loadStripe(STRIPE_API_KEY);

const Task6 = () => {
  const min = 1;
  const max = 1000;
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;

  const sendMessage = async () => {
    liff
      .sendMessages([
        {
          type: 'text',
          text: `https://liff.line.me/1656043326-pMq6BjwJ/payment=${rand}`
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
