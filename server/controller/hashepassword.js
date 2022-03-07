const crypt = require("bcrypt");

const hashepassword = (req, res, next) => {
  let pw = req.body.password;
  let pwwithstring = pw + 'saleh';
  crypt.genSalt(10, (err, salt) => {
    if (err) {
      res.send("error in hash");
      next();
    } else {
      crypt.hash(pwwithstring, salt, (error, result) => {
        if (error) {
          res.send("error in hash");
          next();
        } else {
          req.body.password = result;
          next();
        }
      });
    }
  });
};

module.exports = hashepassword;
