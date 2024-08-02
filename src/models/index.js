const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const configEnv = config[env];
const sequelize = new Sequelize(configEnv);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importar e inicializar os modelos
db.User = require('./user')(sequelize, DataTypes);
db.Item = require('./item')(sequelize, DataTypes);
db.SystemAccount = require('./systemAccount')(sequelize, DataTypes);
db.Server = require('./server')(sequelize, DataTypes);

// Sincronizar os modelos com o banco de dados
db.sequelize.sync();

module.exports = db;
