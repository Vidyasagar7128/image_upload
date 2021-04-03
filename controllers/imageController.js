const multer = require('multer')
const Photos = require('../models/image')

module.exports = {
    uploadImg: async (req, res, next) => {
        var data = new Photos({
            name:req.body.name,
            type:req.body.type,
            price:req.body.price,
            mobile:req.body.mobile,
            image:req.file.filename
        })
        await data.save().then(() => {
            res.status(200).json({ success: true, data,msg:'Image Uploaded Succesfully.' })
            console.log('Image Uploaded Succesfully.');
        })

        try {
            
        } catch (e) {
            console.log('Internal Server Error')
            res.send('Internal Server Error')
        }

    }
}