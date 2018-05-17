'use strict'

const mongoose = require('mongoose')
const Schema  = mongoose.Schema

const BochonSchema = Schema({
   nombre:String, 
   nroCampo:Number,
   preparador: String,
   preparadorID: String,
   tipoPreparacion:{type: String, enum:['quimica', 'tipoA','tipoB']},
   acidosAplicados: [String],
   ejemplarAsociado: String
})

module.exports = mongoose.model('Bochon', BochonSchema)