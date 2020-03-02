const knex = require('knex');

const config = require('../backend/knexfile');

const db = knex(config.development);

module.exports = db;