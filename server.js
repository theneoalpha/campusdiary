const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const DB = process.env.DB;

mongoose.set('strictQuery', true);
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connection successful');
}).catch((err) => {
  console.error('No connection', err);
});

app.use(cors());
app.use(express.json());

app.use('/api', require('./router/auth'));

module.exports = app; 
