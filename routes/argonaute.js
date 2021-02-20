const express = require("express");
const router = express.Router();
const Argonaute = require("../models/Argonaute");

//GET ALL ARGONAUTES
router.get("/", (req, res, next) => {
  Argonaute.find({})
    .then((argonauteDocuments) => {
      console.log("allargo", argonauteDocuments);
      res.status(200).json(argonauteDocuments);
    })
    .catch(next);
});

//CREATE A NEW ARGONAUTE
router.post("/", (req, res, next) => {
  const updateValues = { ...req.body };
  console.log("updatedValue", updateValues);
  Argonaute.create(updateValues)
    .then((argonaute) => {
      console.log("argonaute créé");
      res.status(201).json(argonaute);
    })
    .catch(next);
});

module.exports = router;
