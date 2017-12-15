var Players = ('../models/amigoSecretoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('api/players/:uname', function(req, res) {
    Players.find({ username: req.params.uname },
    function(err, players){
      if (err) throw err;

      res.send(players);
    });
  });

  app.get('/api/player/:id', function(req, res){
    Players.findById({ _id: req.params.id}, function(err, player){
      if (err) throw err;

      res.send(player);
    });
  });

  app.post('/api/player', function(req, res){
    if (req.body.id) {
      Players.findByIdAndUpdate(req.body.id, { secretSanta: req.body.secretSanta }, function(err, player){
        if (err) throw err;

        req.send('Success');
      });
    }
    else {
      var newPlayer = Players({
        username: 'Test',
        name: req.body.name,
        email: req.body.email,
        });
      };
      newPlayer.save(function(err) {
        if (err) throw err;
        res.send('Success');
      });
  });
}
