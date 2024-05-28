const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  invoices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Invoice' }],
});

module.exports = mongoose.model('Quote', quoteSchema);