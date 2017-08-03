var express = require('express');

var home = require('./routes/default');
var auth = require('./routes/auth');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/', home);
app.use('/auth', auth);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});