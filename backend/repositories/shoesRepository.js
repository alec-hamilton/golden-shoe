const dbService = require('../services/dbService');

let shoesDbConnection = null;

dbService.connectToDb().then((db) => shoesDbConnection = db);

const getShoes = async () => {
    console.log('Repository: getShoes');
    return await shoesDbConnection.query('SELECT * FROM products;');
}

const getShoe = async (id) => {
    console.log('Repository: getShoe ' + id);

    let sqlQuery = 'SELECT `title`, `price`, `image` FROM products WHERE `id` = '
                    + `${id}` + ';';

    return await shoesDbConnection.query(sqlQuery);
}

module.exports.getShoes = getShoes;
module.exports.getShoe = getShoe;
