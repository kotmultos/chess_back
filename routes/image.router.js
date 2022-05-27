const {imageController} = require("../controllers");
const router = require('express').Router();

router.get('/', imageController.getImages);
router.post('/', imageController.addImage);

module.exports = router;