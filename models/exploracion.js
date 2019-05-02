'use strict';
const mongoose = require('mongoose');
const Schema  = mongoose.Schema;


const ExploracionSchema = Schema({
  idExploracion: Number,
  idExcavacion: {type: Number, ref: 'Excavacion'},
  fecha: Date,
  idArea: {type: Number, ref: 'Area'},
});

module.exports = mongoose.model('Exploracion', ExploracionSchema);
