const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  opportunity: { type: mongoose.Schema.Types.ObjectId, ref: 'Opportunity', required: true },
  quotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quote' }],
});

module.exports = mongoose.model('Order', orderSchema);