const path = require('path');
const Estudiante = require('../models/estudiantes');

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/estudiantes.html'));
};

exports.create = function (req, res) {
    var newEstudiante = new Estudiante(req.body);
    console.log(req.body);
    newEstudiante.save(function (err) {
            if(err) {
            res.status(400).send('Unable to save lab05 to database');
        } else {
            res.redirect('/estudiantes/getestudiante');
        }
  });
               };

exports.list = function (req, res) {
        Estudiante.find({}).exec(function (err, estudiantes) {
                if (err) {
                        return res.send(500, err);
                }
                res.render('getestudiante', {
                        estudiantes: estudiantes
             });
        });
};
