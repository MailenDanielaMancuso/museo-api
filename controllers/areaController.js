'use strict';
const areaService = require('../services/areaService');

const createArea = (req,res) => areaService.createArea(req,res);

const getAllAreas = (req, res) => areaService.getAllAreas(req,res);

const getAreaById = (req, res) => areaService.getAreaById(req, res)

const updateArea = (req,res) => areaService.updateArea(req, res);

const removeArea = (req,res) => areaService.removeArea(req, res);

module.exports = {
    createArea,
    getAllAreas,
    getAreaById,
    updateArea,
    removeArea,
};
