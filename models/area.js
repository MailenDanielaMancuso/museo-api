'use strict';

const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const AreaSchema = new Schema({
  idArea:String,
  nombre:String,
  idCiudad:String,
  idProvincia: String,
  idPais: String,
  locacion: {
    type: String,
    coordinates: [],
  },
});

AreaSchema.index({ locacion: '2dsphere' });

module.exports = mongoose.model('Area', AreaSchema);

// A is Area
// mongoose.connection.on('open', function () {
//     A.on('index', function (err) {
//       if (err) return done(err);
//       A.create({ loc: { type: 'Point', coordinates: [-179.0, 0.0] }}, function (err) {
//         if (err) return done(err);
//         A.find({ loc: { $near: { type: 'Point', coordinates:[-179.0, 0.0] }}}, function (err, docs) {
//           if (err) return done(err);
//           console.log(docs);
//           done();
//         })
//       })
//     })
//   });
  
//   function done (err) {
//     if (err) console.error(err.stack);
//     mongoose.connection.db.dropDatabase(function () {
//       mongoose.connection.close();
//     });
//   }