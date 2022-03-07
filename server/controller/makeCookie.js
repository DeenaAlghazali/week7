const { selectUserByIdQuery } = require('../database/queries')



const makeCookie = (req, res, next)=>{
  if(req.cookies.id){
    selectUserByIdQuery(req.cookies.id).then((r) => {
       req.you = r.rows;
       next();
   });
  }else{
      res.redirect('/')
  }
};
module.exports = makeCookie;