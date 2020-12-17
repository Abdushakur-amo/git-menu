$(document).ready(function() {
	$('form').submit(function(event) {
		var json;
		event.preventDefault();
		$.ajax({
			type: $(this).attr('method'),
			url: $(this).attr('action'),
			data: new FormData(this),
			contentType: false,
			cache: false,
			processData: false,
			success: function(result) {
				console.log(result);
				json = jQuery.parseJSON(result);
				if (json.go) {
					window.location.href = json.go;
				} else if (json.error)  {
					alert(result);
					// swal({
					//   title: 'Erorr',
					//   text: json.message,
					//   icon: "error",
					//   button: "OK",
					// });
				} else {
					alert(result);
					// swal({
					//   text: json.message,
					//   icon: "success",
					//   button: "OK",
					// });
					$('.amo_clos').val('');
				}

			},
		});
	});
});