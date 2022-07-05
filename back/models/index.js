'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Block = require('./block.js')(sequelize, Sequelize);
const Transaction = require('./transaction.js')(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Block = Block;
db.Transaction = Transaction;

module.exports = db;
