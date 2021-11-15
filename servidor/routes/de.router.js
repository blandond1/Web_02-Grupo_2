const express = require("express")
const router = express.Router()
const deController = require("../controllers/de.controller");

router.post("/", deController.create)

router.post('/', deController.create)
router.get('/', deController.find)
router.get('/:id', deController.findOne)
router.put('/:id', deController.update)
router.delete('/:id', deController.remove)


module.exports = router