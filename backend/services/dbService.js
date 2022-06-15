const mysql = require('promise-mysql');

const connectToDb = async () => {
    const db = await mysql.createConnection({
        user: 'root',
        password: 'password',
        database: 'robot_stores',
    });
    console.log('MySQL db connected');
    return db;
}

module.exports.connectToDb = connectToDb;
