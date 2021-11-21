require('dotenv').config();

const connectDB = require('./db/connect');
const Product = require('./models/product');
const jsonProducts = require('./products.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log('SUCCESS!!!');
    process.exit(0);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

start();