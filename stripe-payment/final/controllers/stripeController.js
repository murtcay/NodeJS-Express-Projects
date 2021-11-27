const stripe = require('stripe')(process.env.STRIPE_KEY);

const stripeController = async (req, res) => {
  try {
    const {
      purchase,
      total_amount,
      shipping_fee
    } = req.body;
  
    const calculateOrderAmount = () => {
      // this is for demo, normally there are database operations in here
      return total_amount + shipping_fee;
    };
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: 'usd',
    });
  
    res.json({
      clientSecret: paymentIntent.client_secret
    });
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = stripeController;