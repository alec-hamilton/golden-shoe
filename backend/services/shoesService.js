const shoesRepository = require('../repositories/shoesRepository');

const getShoes = async () => {
    console.log('Service: getShoes');
    return await shoesRepository.getShoes();
}

const getShoe = async (id) => {
    console.log('Service: getShoe ' + id);
    return await shoesRepository.getShoe(id);
}

module.exports.getShoes = getShoes;
module.exports.getShoe = getShoe;
