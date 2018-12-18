const mongoose = require('mongoose');

const snackSchema = new mongoose.Schema({
  // this should be "owned" by a user, and perhaps even be a subdocument of the user model.
  title:    { type: String, required: true },
  comment:  { type: String },
  tags:     { type: Array},
},
{ timestamps: { createdAt: 'created_at' } }
);

const Snack = mongoose.model('Snack', snackSchema);

module.exports = Snack;