const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }],
  opportunities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Opportunity' }],
});

module.exports = mongoose.model('Account', accountSchema);