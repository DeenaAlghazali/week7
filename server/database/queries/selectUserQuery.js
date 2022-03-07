const connection = require('../config/connection');

const selectUserQuery = (name) => {
  const sql = {
    text: `select * from users where name = '${name}'`,
  };
  return connection.query(sql);
};

module.exports = selectUserQuery;
