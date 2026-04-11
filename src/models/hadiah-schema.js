const mongoose = require('mongoose');

const hadiahSchema = new mongoose.Schema({
  nama_hadiah: {
    type: String,
    required: true,
  },
  kuota: {
    type: Number,
    required: true,
  },
});

module.exports = hadiahSchema;
