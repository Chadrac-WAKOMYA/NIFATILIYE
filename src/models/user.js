module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: { msg: 'Le nom est deja pris'},
            validate:{
                notEmpty : { msg: '\'designation\' ne doit pas être vide' },
                notNull : { msg: '\'designation\' est une propriété requise' }
            }
        },
        adresse: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'adresse\' ne doit pas être vide' },
                notNull : { msg: '\'adresse\' est une propriété requise' }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isEmail : { msg: 'Email non valide' },
                notNull : { msg: '\'email\' est une propriété requise' }
            }
        },
        logo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isUrl : { msg: 'Utiliser uniquement les URL valides pour les images' },
                notNull : { msg: '\'logo\' est une propriete requise' }
            }
          },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'password\' ne doit pas être vide' },
                notNull : { msg: '\'password\' est une propriété requise' }
            }
        }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }