import Area from '../models/area';


export default class AreaService {
    
    createArea = (req, res) => {
        const { nombre, idCiudad, idProvincia, idPais, location } = req.body;
        const area = new Area(nombre, idCiudad, idProvincia, idPais, location);
        return area.save((err, areaStored) => {
            if(err) res.status(500).send({message:`Error al insertar area en la Base de Datos: ${err}`});
            res.status(200).send({ area: areaStored});
        })
        
    };
    
    getAllAreas = (req, res) => {
        Area.find({}, (err, areas) => {
            if (err) return res.status(500).send({message:`Error al recuperar todas las areas: ${err}`});
            if (!areas) return res.status(404).send({message:'No existen areas'});
            return res.status(200).send({ areas });
        });
    };

    gerAreaById = (req, res) => {
        const { areaId } = req.params;
        Area.findById(areaId, (err, area) => {
            if (err) return res.status(500).send(`Error al intentar recuperar el area: ${areaId}`);
            if (!area) return res.status(404).send({message: 'El area buscada no existe'});
            return res.status(200).send({ area });
        })
    };

    updateArea = (req, res) => {
        const { areaId } = req.params;
        Area.update({ _id: areaId }, req.body, (err, value) => {
            if (err) return res.status(500).send(`Error al intentar modificar el area: ${areaId}`);
            if (value.n > 0) return res.status(200).send();
            return res.status(400).send('Bad Request');
          });
    };

    removeArea = (req, res) => {
        const { areaId } = req.params;
        Area.remove({ '_id': areaId }, (err, value) => {
            if (err) return res.status(500).send(`Error al intentar eliminar area: ${areaId}`);
            if (value.result.n > 0) return res.status(200).send();
            return res.status(400).send('Bar Request');
          });
    };
};