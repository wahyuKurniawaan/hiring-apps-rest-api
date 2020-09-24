const multer = require('multer')

const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, './uploads/')
  },
  filename: (req, file, callback) => {
    console.log(file.mimetype)
    callback(null, file.originalname + '-' + Date.now())
  }
})

const fileFilter = (request, file, callback) => {
  console.log('file filter = ' + file)
  if (file.mimetipe === 'image/jpeg' || file.mimetipe === 'image/png') {
    callback(null, true)
  } else {
    return callback(new Error('Extention file must be JPG or PNG'), false)
  }
}

const limits = { fileSize: 1024 * 1024 * 1 }

let upload = multer({ storage, fileFilter, limits }).single('image')

const uploadFilter = (request, response, next) => {
  upload(request, response, function (error) {
    if (error instanceof multer.MulterError) {
      // multer error when uploading
      console.log(error.message)
      response.send({
        success: false,
        message: 'Error uploading'
      })
    } else if (error) {
      // unknown error
      console.log(error.message)
      response.send({
        success: false,
        message: 'Error uploading'
      })
    } else { next() }
  })
}

module.exports = uploadFilter
