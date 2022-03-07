const { storeUsersQuery } = require('../database/queries')

const signUp = (req, res) => {
  const { username, password } = req.body;
  storeUsersQuery(username, password)
    .then((resp) => res.redirect('/home'));
};

module.exports = signUp;
