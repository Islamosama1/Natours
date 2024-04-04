/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51P0oivJBn4wHxxPa6o6A3wawm1V1yskDaLTAWMOAJ0uCneTAYeTcyWyLQUmELsDbh0JZCgB7lFSrwUjiqy2ejaBF00ErhGsELU',
);

export const bookTour = async (tourId) => {
  try {
    //1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    console.log(session.data.session);
    //2) Create checkout form + charge credit card

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
