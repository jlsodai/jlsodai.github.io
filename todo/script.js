$( document ).ready(function() {
    // $('#addtodo .t-title').is(':checked')
    $("button").click(function(e){
    	e.preventDefault();
    	var title = $('.t-title').val();
    	var bdate = $('.t-bdate').val();
    	var edate = $('.t-edate').val();
    	$('#start').append('<div class="task">' +
                        '<div class="task-title"><input type="checkbox" class="todoc" /> ' + title + '</div>' +
                        '<div class="task-start">' + bdate+ '</div>' +
                        '<div class="task-end">' + edate+ '</div>' +
                    '</div>'
    	);
    	$('#add-form').trigger("reset");
    });
    $(document).on('click', ".todoc", function() {
		var content = '<div class="task">' + $(this).parents('.task').html() + '</div>';
		var parentId = $(this).parents('.task').parent().attr("id");
		$(this).parents('.task').remove();
		if (parentId == 'start'){
			$('#progress').append(content);
		}else if (parentId == 'progress'){
			$('#complete').append(content);
		}
	});
	$(".t-bdate, .t-edate" ).datepicker();
});
