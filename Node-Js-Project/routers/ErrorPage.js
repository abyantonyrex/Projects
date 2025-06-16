let express = require('express');
let router = express.Router();
let Path = require('path')
let global = require('../util/pathdef')
let errorController = require('../controller/errorController')


router.use(errorController.errorPage)

module.exports = router;