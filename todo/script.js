$( document ).ready(function() {
    // $('#addtodo .t-title').is(':checked')
    $("button").click(function(e){
    	e.preventDefault();
    	var title = $('.t-title').val();
    	if (title == "") {
    		title = "Some Title";
    	};
    	var bdate = $('.t-bdate').val();
    	if (bdate == "") {
    		bdate = "25/06/1993";
    	};
    	var edate = $('.t-edate').val();
    	if (bdate == "") {
    		bdate = "25/06/1993";
    	};
    	$('#start .panel').append(
			'<div class="task panel-body">' +
                '<div class="task-title">' + 
                	title +
                	'<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>' +
                	'<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                '</div>' +
            	'<div class="task-start">' + bdate+ '</div>' +
            	'<div class="task-end">' + edate+ '</div>' +
            '</div>'
    	);
    	$('#add-form').trigger("reset");
    });
    $(document).on('click', ".glyphicon", function() {
    	var cClass = $(this).attr("class");
    	console.log(cClass);
		var content = '<div class="task panel-body">' + $(this).parents('.task').html() + '</div>';
		var parentId = $(this).parents('.panel').parent().attr("id");
		console.log(parentId);
		$(this).parents('.task').remove();
		if (cClass == 'glyphicon glyphicon-ok') {
			if (parentId == 'start'){
				$('#progress .panel').append(content);
			}else if (parentId == 'progress'){
				$('#complete .panel').append(content);
			}
		} else {
			if (parentId == 'complete'){
				$('#progress .panel').append(content);
			} else if (parentId == 'progress'){
				$('#start .panel').append(content);
			}
		}
	});
	$(".t-bdate, .t-edate" ).datepicker();
});
