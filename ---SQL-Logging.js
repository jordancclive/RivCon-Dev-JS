/*
---------------------------------------------------

                Logging

---------------------------------------------------

const Sequelize = require('sequelize');
const path = require('path');
const dbName = process.env.DB_NAME || 'zendesk';

const db = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '../', dbName + '.db'),
    logging: false
});

module.exports = db;

---------------------------------------------------

lets say you did the above and had logging turned off for sequilize. This will let you do pinpointed logging.

db.models.Organizations.findOne({ where: { name: ticketJson.cp.name }, logging: x => console.log(x) })

---------------------------------------------------

*/
