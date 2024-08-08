import multer, { FileFilterCallback} from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        const filename = file.originalname.replace(/\s+/g, "_")

        cb(null, filename)
    }
})

const fileFilter = (
    req: Express.Request,
    file: Express.Multer.File,
    cb: FileFilterCallback
) => {
    if( file.mimetype.startsWith("image/")) {
        cb(null, true)
    }else{
        cb(new Error('Only images'))
    }
}

const upload = multer({ storage, fileFilter })

export default upload;