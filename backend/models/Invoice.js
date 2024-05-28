const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quote: { type: mongoose.Schema.Types.ObjectId, ref: 'Quote', required: true },
});

module.exports = mongoose.model('Invoice', invoiceSchema);