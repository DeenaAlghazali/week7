const app = require('./app');
require('env2')('.env');

app.set('port', process.env.PORT || 2222);

app.listen(app.get('port'), () => {
  console.log(`SERVER IS RUNNING http://localhost:${app.get('port')}`);
})