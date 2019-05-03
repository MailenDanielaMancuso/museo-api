'use strict';
const Excavacion = require('../models/excavacion');
const servicioExcavacion = require('../services/excavacion');

function getExcavacionId(req, res) { // busca una excavacion por su ID - clave mongo
    let excavacionId = req.params.excavacionId
    Excavacion.findById(excavacionId, (err,excavacionId)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
        if(!excavacionId) return res.status(404).send({message:`La excavacion no existe`})
        res.status(200).send({excavacionId: excavacionId})
    })
}

function getExcavacionNombre(req, res) { // busca una excavacion por nombre
    let excavacion = req.params.excavacionId
    Excavacion.findOne({'nombre':excavacion}, (err,excavacion)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
        if(!excavacion) return res.status(404).send({message:`La excavacion no existe buscada`})
        res.status(200).send({excavacion: excavacion})
    })
}

function getExcavaciones(req, res){
    Excavacion.find({},(err,excavaciones)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
        if(!excavaciones) return res.status(404).send({message:`No existen excavaciones`})
        res.status(200).send({excavaciones: excavaciones})
    })
}

function getExcavacionesHome(req,res){ //busca una excavacion para mostrar en home parametro 1 2 3
    let excavacion = req.params.excavacionId
    Excavacion.find({'muestraHome':excavacion}, (err,excavacion)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
        if(!excavacion) return res.status(404).send({message:`La excavacionHome no existe buscada`})
        res.status(200).send({excavacion: excavacion})
    })
}

function getExcavacionesDirector(req,res){
    let directorId = req.params.excavacionId
    //console.log("API-REST: ExcavacionesDirector con:"+ directorId)
    Excavacion.find({'directorId':directorId},(err,excavaciones)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
        if(!excavaciones) return res.status(404).send({message:`No existen excavaciones con el Director: ... `+ directorId})
        res.status(200).send({excavaciones: excavaciones})
    })
}

function getExcavacionesPaleontologo(req,res){
    let paleontologo = req.params.excavacionId
    //console.log("API-REST: ExcavacionesPaleontologo con:"+ paleontologo)
    Excavacion.find({'paleontologo':paleontologo},(err,excavaciones)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
        if(!excavaciones) return res.status(404).send({message:`No existen excavaciones con el Paleontologo: ... `+ paleontologo})
        res.status(200).send({excavaciones: excavaciones})
    })
}

function getExcavacionesColector(req,res){
    let colector = req.params.excavacionId
    //console.log("API-REST: ExcavacionesColector con:"+ colector);
    Excavacion.find({'colector':colector},(err,excavaciones)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
        if(!excavaciones) return res.status(404).send({message:`No existen excavaciones con el Director: ... `+ colector})
        res.status(200).send({excavaciones: excavaciones})
    })
}

const crearExcavacion = (req, res) => servicioExcavacion.crearExcavacion(req, res);
//
    // idExploracion: {type: Number, ref: 'Exploracion'}, areaExploracion
    // idArea: {type: Number, ref: 'Area'}, areaExcavacion
    // excavacion.nombre = 'excavacion 1';
    // excavacion.puntoGps = req.body.puntoGps;
    // excavacion.idCiudad = 14; //Neuquen
    // excavacion.idProvincia = 14; //Neuquen
    // excavacion.idPais = 1; //Argentina
    // return excavacion.save((err, nuevaExcavacion) => {
    //     if(err) res.status(500).send({message:`Error al insertar area en la Base de Datos: ${err}`});
    //     res.status(200).send({ area: nuevaExcavacion});
    // });
    // };
    
    // let excavacion = new Excavacion();
    // excavacion.codigo = req.body.codigo
    // excavacion.nombre = req.body.nombre
    // excavacion.descripcion = req.body.descripcion
    // excavacion.puntoGps = req.body.puntoGps
    // excavacion.fechaInicio = req.body.fechaInicio
    // excavacion.fechaBaja = req.body.fechaBaja
    // excavacion.motivoBaja = req.body.motivoBaja
    // excavacion.director = req.body.director
    // excavacion.directorId = req.body.directorId
    // excavacion.paleontologo = req.body.paleontologo
    // excavacion.colector = req.body.colector
    // excavacion.area = req.body.area
    // excavacion.localidad = req.body.localidad
    // excavacion.provincia = req.body.provincia
    // excavacion.bochonesEncontrados = req.body.bochonesEncontrados
    // excavacion.fotosExcavacion = req.body.fotosExcavacion
    // excavacion.videosExcavacion = req.body.videosExcavacion
    // excavacion.muestraHome = req.body.muestraHome
    // return excavacion.save((err, excavacionStored) => {
    //     if(err) res.status(500).send({message:`Error al salvar en la Base de Datos:${err}`})
    //     res.status(200).send({ excavacion: excavacionStored })
    // });

module.exports = {
    getExcavaciones,
    getExcavacionId,
    getExcavacionNombre,
    getExcavacionesHome,
    getExcavacionesDirector,
    getExcavacionesPaleontologo,
    getExcavacionesColector,
    crearExcavacion,
};
