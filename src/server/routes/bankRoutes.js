const express = require('express');
const bankController = require('./../controllers/bankController');
const router = express.Router();

router.route('/findAccount').get(bankController.findAccount);
router.route('/login/:email/:password').get(bankController.loginUser);
router.route('/deleteAll').delete(bankController.deleteAll);
router.route('/createUser').post(bankController.createUser);
router.route('/getBalance/:type').get(bankController.getBalance);
router.route('/depositFunds').post(bankController.depositFunds);
router.route('/withdrawFunds').post(bankController.withdrawFunds);

module.exports = router;
