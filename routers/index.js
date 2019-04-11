'use strict'

const express = require('express')
const productCtrl = require('../controllers/product')
const personaCtrl = require('../controllers/persona')
const excavacionCtrl = require ('../controllers/excavacion')
const bochonCtrl = require('../controllers/bochon')
const piezaCtrl = require('../controllers/pieza')
const ejemplarCtrl = require('../controllers/ejemplar')
const homeCtrl = require('../controllers/home')
const areaCtrl = require('../controllers/areaController')
const api = express.Router()

api.get('/info',homeCtrl.getHome) // obtiene todos los datos del Home unico documento

api.get('/product',productCtrl.getProducts) //obtiene todos los productos
api.get('/product/:productId',productCtrl.getProduct) // obtiene el producto cuyo id es productId
api.post('/product',productCtrl.saveProduct) //inserta un nuevo producto
api.put('/product/:productId',productCtrl.updateProduct) // actualiza un producto cuyo id es productId
api.delete('/product/:productId',productCtrl.deleteProduct) // borra el producto cuyo id es productId

api.get('/persona', personaCtrl.getPersonas)
api.get('/personaId/:personaId', personaCtrl.getPersonaId)
api.get('/personaDni/:personaId', personaCtrl.getPersonaDni)
api.post('/persona', personaCtrl.savePersona)

api.get('/excavacion', excavacionCtrl.getExcavaciones)
api.get('/excavacionId/:excavacionId', excavacionCtrl.getExcavacionId)
api.get('/excavacionNombre/:excavacionId',excavacionCtrl.getExcavacionNombre)
api.get('/excavacionHome/:excavacionId', excavacionCtrl.getExcavacionesHome)
api.get('/excavacionDirector/:excavacionId', excavacionCtrl.getExcavacionesDirector)
api.get('/excavacionPaleontologo/:excavacionId', excavacionCtrl.getExcavacionesPaleontologo)
api.get('/excavacionColector/:excavacionId',excavacionCtrl.getExcavacionesColector)
api.post('/excavacion',excavacionCtrl.saveExcavacion)

api.get('/bochon',bochonCtrl.getbochones)
api.get('/bochonId/:bochonId',bochonCtrl.getbochonId)
api.get('/bochonCampo/:bochonId',bochonCtrl.getbochonCampo)
api.get('/bochonEjemplar/:bochonId',bochonCtrl.getbochonEjemplar)
api.post('/bochon',bochonCtrl.saveBochon)

api.get('/pieza', piezaCtrl.getpiezas)
api.get('/piezaId/:piezaId', piezaCtrl.getpiezaId)
api.get('/piezaIdentificador/:piezaId', piezaCtrl.getpiezaIdentificador)
api.get('/piezaEjemplar/:piezaId', piezaCtrl.getpiezaEjemplar)
api.post('/pieza', piezaCtrl.savePieza)

api.get('/ejemplar', ejemplarCtrl.getejemplares)
api.get('/ejemplarId/:ejemplarId',ejemplarCtrl.getejemplarId)
api.get('/ejemplarNroColeccion/:ejemplarId', ejemplarCtrl.getejemplarNroColeccion)
api.get('/ejemplarHome/:ejemplarId',ejemplarCtrl.getejemplarHome)
api.post('/ejemplar', ejemplarCtrl.saveEjemplar)

// Area Data
api.get('/areas', areaCtrl.getAllAreas)
api.get('/area', areaCtrl.getAreaById)
api.post('/area', areaCtrl.createArea)
api.put('/area', areaCtrl.updateArea)
api.delete('/area', areaCtrl.removeArea)


module.exports = api