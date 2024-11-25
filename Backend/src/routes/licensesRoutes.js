const express = require("express");
const router = express.Router();
const { createLicense } = require("../controller/licenseController"); 

router.post("/add", createLicense);

module.exports = router;
