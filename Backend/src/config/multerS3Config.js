// // multerS3Config.js
// const multer = require('multer');
// const multerS3 = require('multer-s3');
// const s3 = require('./aws-config');

// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: process.env.S3_BUCKET_NAME,
//     acl: 'public-read', // Adjust permissions as needed
//     metadata: function (req, file, cb) {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: function (req, file, cb) {
//       cb(null, Date.now().toString() + '-' + file.originalname); // Create unique filename
//     },
//   }),
// });

// module.exports = upload;
