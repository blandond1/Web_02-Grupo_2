const express = require("express")
const router = express.Router()
const ciController = require("../controllers/ci.controller");

router.post("/", ciController.create)

router.post('/', ciController.create)
router.get('/', ciController.find)
router.get('/:id', ciController.findOne)
router.put('/:id', ciController.update)
router.delete('/:id', ciController.remove)


module.exports = router