//var Pet = require('../models/pet.js');

exports.allPets = function(req, res) {
    res.send('All pets');
};

exports.newPet = function(req, res) {
    res.send('new pet');
};

exports.OnePet = function(req, res) {
    res.send('One pet');
};

exports.PatchPet = function(req, res) {
    res.send('pach pet');
};

exports.DeletePet = function(req, res) {
    res.send('Delete pet');
};