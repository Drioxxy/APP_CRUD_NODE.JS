const express = require ('express');
const router = express.Router();

const customerController  = require ('../controllers/customerController');

//para que escuchce el metodo add
router.get('/', customerController.list);
router.post('/add', customerController.save);

module.exports = router;