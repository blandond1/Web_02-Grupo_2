const express = require("express")
const router = express.Router()
const auController = require("../controllers/au.controller");

router.post("/", auController.create)

router.post('/', auController.create)
router.get('/', auController.find)
router.get('/:id', auController.findOne)
router.put('/:id', auController.update)
router.delete('/:id', auController.remove)


module.exports = router