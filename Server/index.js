const express = require('express');
const app = express();
const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();

const PORT = 5000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DB connected !!!');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server Started!!! ${PORT}`);
});
