const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./path/to/serviceAccountKey.json');

const app = express();
app.use(cors());
app.use(express.json());

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/salesforce_clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define models
const Account = require('./models/Account');
const Contact = require('./models/Contact');
const Opportunity = require('./models/Opportunity');
const Order = require('./models/Order');
const Quote = require('./models/Quote');
const Invoice = require('./models/Invoice');

app.get('/', (req, res) => {
  res.send('Welcome to the Salesforce Clone API');
});

// Define routes for Account
app.get('/accounts', async (req, res) => {
  const accounts = await Account.find();
  res.json(accounts);
});

app.post('/accounts', async (req, res) => {
  const newAccount = new Account(req.body);
  await newAccount.save();
  res.status(201).json(newAccount);
});

// Define similar routes for Contact, Opportunity, Order, Quote, and Invoice...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));