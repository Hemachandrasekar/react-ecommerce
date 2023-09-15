const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors")
const userRoute = require('./routes/UserRoute');
const authRoute = require('./routes/AuthRoute');
const productRoute = require('./routes/ProductRoute')
const cartRoute = require('./routes/CartRoute')
const orderRoute = require('./routes/OrderRoute')
const stripeRoute = require('./routes/StripeRoute')

dotenv.config();
app.use(express.json());
const PORT = 5000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DB connected !!!');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors())
app.use('/api/v1/user', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/product', productRoute);
app.use('/api/v1/cart', cartRoute);
app.use('/api/v1/order', orderRoute);
app.use('/api/v1/checkout', stripeRoute);


app.listen(process.env.PORT || PORT, () => {
  console.log(`Server Started!!! ${PORT}`);
});
