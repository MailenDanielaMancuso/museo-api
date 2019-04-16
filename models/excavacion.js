'use strict';
const mongoose = require('mongoose');
const Schema  = mongoose.Schema;


const Dupla = Schema({
    nombre:String,
    descripcion:String
});

const ExcavacionSchema = Schema({
    codigo:String,
    nombre:String,
    descripcion:String,
    puntoGps: [Number],
    fechaInicio: Date,
    fechaBaja: Date,
    motivoBaja:String,
    director: String,
    directorId: String,
    paleontologo: String,
    colector: String,
    idArea: {type: String, ref: 'Area'},
    localidad: String,
    provincia:String,
    bochonesEncontrados: [String],
    fotosExcavacion: [Dupla],
    videosExcavacion: [String],
    muestraHome: Boolean,
});

module.exports = mongoose.model('Excavacion', ExcavacionSchema);
