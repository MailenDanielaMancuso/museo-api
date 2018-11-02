'use strict'

const Persona = require('../models/persona')

function getPersonaId(req, res) { // busca una persona por su ID - clave mongo
    let personaId = req.params.personaId
    Persona.findById(personaId, (err,personaId)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
        if(!personaId) return res.status(404).send({message:`La persona no existe`})
        res.status(200).send({personaId: personaId})
    })
}

function getPersonaDni(req, res) { // busca una persona por DNI
    let persona = req.params.personaId
    Persona.findOne({'dni':persona}, (err,persona)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
        if(!persona) return res.status(404).send({message:`La persona no existe buscada`})
        res.status(200).send({persona: persona})
    })
}

function getPersonas(req, res){
    Persona.find({},(err,personas)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
        if(!personas) return res.status(404).send({message:`No existen personas`})
        res.status(200).send({personas: personas})
    })
}

function savePersona(req,res){
    console.log('POST /api/persona')
    console.log(req.body)
      
    let persona = new Persona()
    persona.nombres = req.body.nombres
    persona.apellidos = req.body.apellidos
    persona.dni = req.body.dni
    persona.fechaInicio = req.body.fechaInicio
    persona.titulos = req.body.titulos
    persona.foto = req.body.foto
    persona.fechaBaja = req.body.fechaBaja
    persona.motivoBaja = req.body.motivoBaja

    persona.save((err,personaStored)=> {
        if(err) res.status(500).send({message:`Error al salvar en la Base de Datos:${err}`})
        res.status(200).send({persona: personaStored})
    })
}

module.exports ={
    getPersonaId,
    getPersonaDni,
    getPersonas,
    savePersona
}