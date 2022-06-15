const dbService = require('../services/dbService');

let shoesDbConnection = null;

dbService.connectToDb().then((db) => shoesDbConnection = db);

const getShoes = async () => {
    console.log('Repository: getShoes');
    return await shoesDbConnection.query('SELECT * FROM products;');
}

const getShoe = async (id) => {
    console.log('Repository: getShoe ' + id);

    const sqlQuery = 'SELECT `brands`.`brand`, `products`.`model`, `products`.`price`, `products`.`image_name`, `products`.`stock`'
                    + 'FROM `products`'
                    + 'INNER JOIN `brands`'
                    + 'ON `products`.`brand` = `brands`.`id`'
                    + 'WHERE `products`.`id` = '
                    + `${id}`
                    + ';';

    return await shoesDbConnection.query(sqlQuery);
}

module.exports.getShoes = getShoes;
module.exports.getShoe = getShoe;
