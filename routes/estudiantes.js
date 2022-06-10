const express = require('express');
const router = express.Router();
const estudiantes = require('../controllers/estudiantes');

router.get('/', function(req, res){
    estudiantes.index(req,res);
});

router.post('/addestudiante', function(req, res) {
    estudiantes.create(req,res);
});

router.get('/getestudiante', function(req, res) {
    estudiantes.list(req,res);
});

module.exports = router;
