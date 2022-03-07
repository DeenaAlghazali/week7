// storeUsersQuery
const connection = require('../config/connection');

const storeUsersQuery = (name, password) => {
  const sql = {
    text: `insert into users (name , password) values ('${name}' , '${password}')`,
  };
  return connection.query(sql);
};

module.exports = storeUsersQuery;
