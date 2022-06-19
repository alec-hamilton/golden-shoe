const mysql = require('promise-mysql');

const connectToDb = async () => {
    const db = await mysql.createConnection({
        user: 'root',
        password: 'password',
        database: 'golden-shoe',
    });
    console.log('MySQL db connected');
    return db;
}

module.exports.connectToDb = connectToDb;
