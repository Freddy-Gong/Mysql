const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('test', 'root', '123456', {
    dialect: 'mysql'
});

// 创建User模型
class User extends Model { }
//初始化
User.init({
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

async function run() {
    User.destroy({
        where: {
            id: 1
        }
    })
    const users = await User.findAll();
    console.log(JSON.stringify(users))
    sequelize.close()
}
run()
// sequelize.sync()
//     .then(() => User.create({
//         username: 'janedoe',
//         birthday: new Date(1980, 6, 20)
//     }))
//     .then(jane => {
//         console.log(jane.toJSON())
//     })