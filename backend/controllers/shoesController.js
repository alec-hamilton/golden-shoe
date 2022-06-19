const shoesService = require('../services/shoesService');

const getShoes = (req, res) => {
    console.log('Controller: getShoes');
    shoesService.getShoes().then((allShoes) => res.json(allShoes));
}

const getShoe = (req, res) => {
    let shoeId = req.params.shoeId;
    console.log('Controller: getShoe ' + shoeId);
    shoesService.getShoe(shoeId).then((shoe) => res.json(shoe));
}

module.exports.getShoes = getShoes;
module.exports.getShoe = getShoe;
