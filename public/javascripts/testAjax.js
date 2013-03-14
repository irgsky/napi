$(document).ready(function() {

//	$("#testInput").hide();

	$("#testInput").click(function() {
		$.ajax({
			type: "POST",
			url: "/save_hero",
			data: JSON.stringify({ name: 'testName', fact: "testFact" }),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function(data) {
//				$('<li>').appendTo('#facts').text(fact);
//				$('#new-fact').val('');
				console.log('success: ' + JSON.stringify(data));
			},
			error: function(err) {
				var msg = 'Status: ' + err.status + ': ' + err.responseText;
				alert(msg);
			}
		});

		return false;
	});


});
