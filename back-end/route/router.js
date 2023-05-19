const express = require('express')
const router = express.Router()

const {
    addItem,
    getItems,
    getDone,
    deleteItem,
    patchText,
    patchCheck,
    defaultRes,
    test
} = require("../controller")

router
.post("/add/", addItem)
.get("/list/", getItems)
.get("/count/", getDone)
.delete("/delete/", deleteItem)
.patch("/update/", patchText)
.patch("/checked/", patchCheck)
.get("/test/", test)
.get("/", defaultRes)

module.exports = router