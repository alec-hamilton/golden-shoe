const shoesService = require('../services/shoesService');

const getShoes = (req, res) => {
    console.log('Controller: getShoes');
    shoesService.getShoes().then((allShoes) => res.json(allShoes));
}

module.exports.getShoes = getShoes;