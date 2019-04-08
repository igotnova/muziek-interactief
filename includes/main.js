$('.checkbox input[type=checkbox]').on('change', function() {
	$(this).closest('.checkbox').toggleClass('checked', $(this).is(':checked'));
});

$('.switch input[type=checkbox]').on('change', function() {
	$(this).closest('.switch').toggleClass('checked', $(this).is(':checked'));
});

$('.radio input[type=radio]').on('change', function() {
	$(this).closest('.radio').toggleClass('checked', $(this).is(':checked'));
});