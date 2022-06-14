const shoesRepository = require('../repositories/shoesRepository');

const getShoes = async () => {
    console.log('Service: getShoes');
    return await shoesRepository.getShoes();
}