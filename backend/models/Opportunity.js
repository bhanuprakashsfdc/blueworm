const mongoose = require('mongoose');

const opportunitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
});

module.exports = mongoose.model('Opportunity', opportunitySchema);