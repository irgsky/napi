function uploadFile(req, res) {
	res.render('uploadFile', {
		'title': 'Upload file example'
	});
}

function uploadFileAjax(req, res) {
	var tmp_path = req.files.thumbnail.path;

	console.log(tmp_path);


	res.contentType('json');
	res.send({
		'status': 1
	});
}

function uploadFilePost(req, res) {
    // console.log(req.body);
    // console.log(req.files);

	var fs = require('fs'),
		tmpPath = req.files.thumbnail.path,
		targetPath = './public/images' + req.files.thumbnail.name;

	fs.rename(tmpPath, targetPath, function(error) {
		if (error) {
			throw error;
		}

		fs.unlink(tmpPath, function() {
			if (error) {
				throw error;
			}

			res.send('File uploaded to: ' + target_path + ' - ' + req.files.thumbnail.size + ' bytes');
		})
	});



	res.render('uploadFile', {
		'title': 'Upload file example'
	});
}

exports.uploadFile = uploadFile;
exports.uploadFilePost = uploadFilePost;
exports.uploadFileAjax = uploadFileAjax;