// const Busboy = require('busboy');
// const fs = require('fs');
// const path = require('path');

// const uploadVideoMiddleware = (req, res, next) => {
//   const busboy = new Busboy({ headers: req.headers });
//   const uploadPath = path.join(__dirname, 'src/categoryimage', 'videos'); // Set upload directory

//   // Ensure the upload directory exists
//   if (!fs.existsSync(uploadPath)) {
//     fs.mkdirSync(uploadPath, { recursive: true });
//   }

//   req.uploadedFiles = []; // Array to store file information

//   busboy.on('file', (fieldname, file, filename) => {
//     const filePath = path.join(uploadPath, `${Date.now()}-${filename}`);
//     const fstream = fs.createWriteStream(filePath);

//     file.pipe(fstream);
//     file.on('end', () => {
//       req.uploadedFiles.push({
//         fieldname,
//         filename,
//         path: filePath,
//       });
//     });
//   });

//   busboy.on('finish', () => {
//     next(); // Continue to the route handler
//   });

//   busboy.on('error', (err) => {
//     res.status(500).json({
//       status: false,
//       message: 'Video upload failed',
//       error: err.message,
//     });
//   });

//   req.pipe(busboy);
// };

// module.exports = uploadVideoMiddleware;
// const busboy = require('busboy');
// const fs = require('fs');
// const path = require('path');

// const uploadVideoMiddleware = (req, res, next) => {
//   const bb = busboy({ headers: req.headers });
//   const uploadPath = path.join(__dirname, 'src/categoryimage', 'videos');

//   // Ensure the upload directory exists
//   if (!fs.existsSync(uploadPath)) {
//     fs.mkdirSync(uploadPath, { recursive: true });
//   }

//   req.uploadedFiles = [];

//   bb.on('file', (fieldname, file, filename) => {
//     const filePath = path.join(uploadPath, `${Date.now()}-${filename}`);
//     const fstream = fs.createWriteStream(filePath);

//     file.pipe(fstream);
//     file.on('end', () => {
//       req.uploadedFiles.push({ fieldname, filename, path: filePath });
//     });
//   });

//   bb.on('finish', () => next());
//   bb.on('error', (err) => res.status(500).json({ status: false, message: 'Upload failed', error: err.message }));

//   req.pipe(bb);
// };

// module.exports = uploadVideoMiddleware;
//===================================
// const busboy = require('busboy');
// const fs = require('fs');
// const path = require('path');

// const uploadVideoMiddleware = (req, res, next) => {
//   const bb = busboy({ headers: req.headers });
//   const uploadPath = path.join(__dirname, '../categoryimage/videos');

//   // Ensure the upload directory exists
//   if (!fs.existsSync(uploadPath)) {
//     fs.mkdirSync(uploadPath, { recursive: true });
//   }

//   bb.on('file', (fieldname, file, filename) => {
//     const filePath = path.join(uploadPath, `${Date.now()}-${filename}`);
//     const fstream = fs.createWriteStream(filePath);

//     file.pipe(fstream);
//     file.on('end', () => {
//       // Store file data as a single object instead of an array
//       req.uploadedFile = {
//         fieldname,
//         filename: filename, 
//         path: filePath,
//       };
//     });
//   });

//   bb.on('finish', () => next());
//   bb.on('error', (err) => res.status(500).json({ status: false, message: 'Upload failed', error: err.message }));

//   req.pipe(bb);
// };

// module.exports = uploadVideoMiddleware;


//=========================================
const multer = require('multer');
const path = require('path');

const fs = require('fs');

// Define storage settings for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../categoryimage/videos');

    // Ensure the upload directory exists
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // Create a unique filename with the current timestamp
    const uniqueSuffix = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueSuffix);
  }
});

// Initialize the Multer upload middleware
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    // Accept only video files
    if (file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Only video files are allowed!'), false);
    }
  }
}).single('video'); // 'video' is the field name in the form

// Wrap the Multer upload function in middleware
const uploadVideoMiddleware = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json({ status: false, message: 'Upload failed', error: err.message });
    }

    // Add file details to req.uploadedFile as a single object
    if (req.file) {
      req.uploadedFile = {
        fieldname: req.file.fieldname,
        filename: req.file.filename,
        path: req.file.path
      };
    }
    
    next();
  });
};

module.exports = uploadVideoMiddleware;
