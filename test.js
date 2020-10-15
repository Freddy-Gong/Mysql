const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
})

connection.connect();

connection.query('CREATE DATABASE IF NOT EXISTS test CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;', function (error, results, fields) {
    if (error) throw error;
    console.log('创建数据库')
    console.log(results)
})
connection.query('use test')

connection.query(`CREATE TABLE IF NOT EXISTS xxx(
    name text,
    age int
)`, function (error, results, fields) {
    if (error) throw error;
    console.log('创建表')
    console.log(results)
})

connection.end()