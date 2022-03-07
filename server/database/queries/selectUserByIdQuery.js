const connection = require('../config/connection');

const selectUserByIdQuery = (id) => {
  const sql = {
    text: `select * from users where id = '${id}'`,
  };
  return connection.query(sql);
};

module.exports = selectUserByIdQuery;
