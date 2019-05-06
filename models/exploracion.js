'use strict';
const mongoose = require('mongoose');
const Schema  = mongoose.Schema;


const ExploracionSchema = Schema({
  idExploracion: Number,
  idExcavacion: {type: String, ref: 'Excavacion'},
  fecha: Date,
  idArea: {type: String, ref: 'Area'},
});

module.exports = mongoose.model('Exploracion', ExploracionSchema);
