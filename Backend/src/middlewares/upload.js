// const multer = require('multer');
// const path = require('path');

// // Set up Multer storage to save images in an 'uploads' folder with unique filenames
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // You can adjust the folder path as needed
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to avoid name conflicts
//   },
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
// });

// // Create 'uploads' directory if it doesn't exist
// const fs = require('fs');
// const uploadsDir = './uploads';
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir);
// }

// module.exports = upload;


const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

// const categoryImageStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'src/categoryimage/'); 
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); 
//   },
// });
const categoryImageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const categoryImageDir = 'src/categoryimage/';
    
    // Create the directory if it doesn't exist
    if (!fs.existsSync(categoryImageDir)) {
      fs.mkdirSync(categoryImageDir, { recursive: true });
    }
    cb(null, categoryImageDir); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename using timestamp
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
});

const uploadCategoryImage = multer({
  storage: categoryImageStorage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
});

const uploadsDir = './uploads';
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// const categoryImageDir = './categoryimage';
// if (!fs.existsSync(categoryImageDir)) {
//   fs.mkdirSync(categoryImageDir);
// }

module.exports = {
  upload,               
  uploadCategoryImage,  
};
