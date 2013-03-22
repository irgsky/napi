function uploader() {
	this.uploadFile = function() {
		$.ajax({
			type: "POST",
			url: "/upload_file_ajax",
			data: JSON.stringify({ 
				name: 'testName',
				thumbnail: $('#fileToUpload').val()
			}),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function(data) {
				if (data.status) {
					alert('Uploaded success.');
				} else {
					alert("Error upload.");	
				}
				// console.log('success: ' + JSON.stringify(data));
			},
			error: function(err) {
				var msg = 'Status: ' + err.status + ': ' + err.responseText;
				alert(msg);
			}
		});

		return false;
	}
}

var Uploader = new uploader();