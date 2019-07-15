$('#distance_meters').click(function(){
 	var newValue = $(this).val();

 	$('#distance_centimeters').val(newValue*100);
 	$('#distance_millimeters').val(newValue*1000);
});