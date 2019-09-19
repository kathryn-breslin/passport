const router = require("express").Router();
const userController = require("../../controller/userController");

router.route("/")
    .post(userController.create);
    
module.exports = router;