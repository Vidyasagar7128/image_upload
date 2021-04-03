const express = require('express');
const imageController = require('./controllers/imageController');
const router = express.Router()
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'./uploads/images')
    },
    filename: (req,file,cb)=>{
        cb(null, file.fieldname+'-'+Date.now()+'.jpg')
    }
})

const upload = multer({
storage: storage,
}).single('image')

router.route('/image')
    .post(upload,imageController.uploadImg)


module.exports = router;
