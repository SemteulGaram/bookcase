const multer = require('multer');
const supportsMime = {
	'image/png': 'png',
	'image/gif': 'gif',
	'image/bmp': 'bmp',
	'image/jpeg': 'jpg'
};

let router = require('express').Router();
let upload = multer({
	storage: multer.diskStorage({
		filename: (req, file, cb) => {
			let extension = supportsMime[file.mimetype];
			if(typeof extension !== 'string') extension = 'dat';

			cb(null, `${Date.now()}.${extension}`);
		},

		destination: (req, file, cb) => {
			cb(null, 'tmp/uploads/')
		}
	})
});

router.get('/', (req, res, next) => {
	res.render('upload');
});

router.post('/:id/:volume/', upload([
	{
		name: 'pages',
		maxCount: 1024
	}
]), (req, res, next) => {
	
});

module.exports = router;