const crypt = require("bcrypt");
const { selectUserQuery } = require('../database/queries')

const login = (req, res) => {
  const { username, password } = req.body;
  selectUserQuery(username).then((response) => {
    if(response.rows.length === 0 ){
      res.redirect(302, '/');
    }else{
    crypt.compare(response.rows[0].password, password, (err, resss) => {
      if (err) {
        res.send('err');
      }else{
        res.status(200).cookie('id' , response.rows[0].id).redirect('/home');
      }
    });
   }
  });
};

module.exports = login;
