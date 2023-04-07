const express = require("express")
const router = express.Router()
const jspubController=require('./jspubAddressesController')
router.route("/")
.get(jspubController.getAll)
.post(jspubController.insertOne)


router.route("/:ID")
.get(jspubController.getOne)
.put(jspubController.update)
.delete(jspubController.remove)

module.exports =router