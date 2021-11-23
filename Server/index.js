const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/UserRoute');
const authRoute = require('./routes/AuthRoute');

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

app.use('/api/v1/user', userRoute);
app.use('/api/v1/auth', authRoute);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server Started!!! ${PORT}`);
});
