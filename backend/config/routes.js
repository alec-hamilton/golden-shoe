const shoesController = require('../controllers/shoesController');
const cors = require('cors');

const routes = (app) => {
    app.get('/shoes', cors(), shoesController.getShoes);
}

module.exports = routes;