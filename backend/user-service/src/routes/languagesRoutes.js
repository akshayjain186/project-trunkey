const express = require('express');
const router = express.Router();
const {
    getAllLanguages,
    getLanguageById,
    updateLanguage,
    deleteLanguage,
    searchLanguages
} = require('../controllers/languagesController');

router.get('/fetch', getAllLanguages);
router.get('/:id', getLanguageById)
router.put('/:id', updateLanguage);
router.delete('/:id', deleteLanguage)
router.get('/languages/search', searchLanguages);


module.exports = router;