const multer = require('multer');
const path = require('path');

// Define storage settings
const storage = multer.memoryStorage(); // Store file in memory

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.mp4' && ext !== '.avi' && ext !== '.mov') {
      return cb(new Error('Only video files are allowed'));
    }
    cb(null, true);
  },
});

module.exports = upload;
