const UserModel = require('../models/user')
const {Sequelize, DataTypes} = require('sequelize')


const sequelize = new Sequelize('nifatiliye_db', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT+2',
    },
    logging: false
  })

  const User = UserModel(sequelize,DataTypes)

  const initDb = () => {
    return sequelize.sync().then(_ => { 
        // Client.create({
        // }).then(client => console.log(client.toJSON()))
      console.log('La base de donnée a bien été initialisée !')
    })
  }

  module.exports = { 
    initDb, User
  }