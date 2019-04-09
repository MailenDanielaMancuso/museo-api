'use strict';
import areaService from '../services/areaService';


export const createArea = (req,res) => areaService.createArea(req,res);

export const getAllAreas = (req, res) => areaService.getAllAreas(req,res);

export const getAreaById = (req, res) => areaService.gerAreaById(req, res)

export const updateArea = (req,res) => areaService.updateArea(req, res);

export const deleteArea = (req,res) => areaService.removeArea(req, res);
