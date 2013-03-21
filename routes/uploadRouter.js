function uploadFile(req, res) {
	res.render('uploadFile', {
		'title': 'Upload file example'
	});
}

function uploadFileAjax(req, res) {
	var tmpPath = req.files.thumbnail.path;

	console.log(tmpPath);


	res.contentType('json');
	res.send({
		'status': 1
	});
}

exports.uploadFile = uploadFile;
exports.uploadFileAjax = uploadFileAjax;