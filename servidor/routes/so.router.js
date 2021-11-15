const express = require("express")
const router = express.Router()
const soController = require("../controllers/so.controller");

router.post("/", soController.create)

router.post('/', soController.create)
router.get('/', soController.find)
router.get('/:id', soController.findOne)
router.put('/:id', soController.update)
router.delete('/:id', soController.remove)


module.exports = router