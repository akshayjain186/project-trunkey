const express = require('express');
const {createBigProject} = require('../controller/BigProjectController.js');
    // ,getAllBigProject,getBigProjectById, updateBigProject,deleteBigProject,uploadAttachment }
    
const { upload } = require('../middlewares/upload.js');
const router = express.Router();

// Routes
// router.post('/uploadfile/:ProjectSubcategoryId', upload.array('attachment', 10), uploadAttachment);
router.post('/add', createBigProject);
// router.get('/fetch', getAllBigProject);
// router.get('/fetch/:id', getBigProjectById);
// router.put('/update/:id', updateBigProject);
// router.delete('/delete/:id', deleteBigProject);

module.exports = router;



