const express = require("express")
const router = express.Router()
const sgoDBController = require("../controllers/sgoDB.controller");

router.post("/", sgoDBController.create)

router.post('/', sgoDBController.create)
router.get('/', sgoDBController.find)
router.get('/:id', sgoDBController.findOne)
router.put('/:id', sgoDBController.update)
router.delete('/:id', sgoDBController.remove)


module.exports = router