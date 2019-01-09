const Coin = require('../models/Coin.model');

CoinRouter.route('/post').post(function (req, res) {
   const coin = new Coin(req.body);
   console.log(coin);
   coin.save()
     .then(coin => {
     res.redirect('/coins');
     })
     .catch(err => {
     res.status(400).send("unable to save to database");
     });
 });