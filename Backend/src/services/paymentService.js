const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const processPayment = async (userId, plan) => {
  // Define pricing based on plan
  const prices = {
    Silver: 29.99,
    Gold: 49.99,
    Premium: 79.99,
  };

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: prices[plan] * 100, // amount in cents
      currency: 'eur',
      // Add other payment options and user details as needed
    });

    return {
      paymentMethod: 'Stripe',
      transactionId: paymentIntent.id,
    };
  } catch (error) {
    throw new Error('Payment processing failed');
  }
};

module.exports = { processPayment };
