'use strict'

const mongoose = require('mongoose')
const Schema  = mongoose.Schema

const MedidasPiezaSchema = Schema({
    ancho:Number,
    largo: Number,
    alto: Number,
    diametro: Number,
    circunferencia: Number
})

const PiezaSchema = Schema({
   identificador: String,
   tipoPieza: String,
   medidasPieza:MedidasPiezaSchema,
   imagenesPieza:[String],
   fechaIngreso:Date,
   fechaBaja:Date,
   motivoBaja:String,
   perteneceEjemplar: String
})

module.exports = mongoose.model('Pieza', PiezaSchema)