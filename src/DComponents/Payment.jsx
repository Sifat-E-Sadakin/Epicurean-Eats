import React from 'react';
import SectionTitle from '../Components/SectionTitle';
import CheckOut from './CheckOut';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51NF9F3AeyKVLGcRPBhWe6OHkhCxZkVKQLdCbgkbRLuZ4BfMtopLZE8nOZmT8zH3XZP8mzQebKe4mccIbdvsxOZ0000JZcxLRgv');

const Payment = () => {
    return (
        <div>
            <SectionTitle title={'Payment'}></SectionTitle>
            
            <Elements stripe={stripePromise}>
                <CheckOut></CheckOut>
            </Elements>

        </div>
    );
};

export default Payment;