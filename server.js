const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config({ path: './process.env' });

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
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.get("/", (req, res) => {
      res.send("API is running...");
  });
}

app.use('/api', require('./router/auth'));

module.exports = app; 
