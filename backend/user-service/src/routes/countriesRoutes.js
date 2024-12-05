const express = require("express");
const {
    getAllCountries,
    updateCountryById,
    getCountryById,
    deleteCountryById,
    searchCountryByName
} = require("../controllers/countriesController");

const router = express.Router();

router.get("/fetch", getAllCountries);
router.get("/:id", getCountryById);
router.put("/:id", updateCountryById);
router.delete("/:id", deleteCountryById);
router.get('/countries/search', searchCountryByName);

module.exports = router;