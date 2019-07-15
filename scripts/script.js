$('#distance_meters').keyup(function(){
 	var distance = $(this).val();

 	$('#distance_centimeters').val(distance*100);
 	$('#distance_millimeters').val(distance*1000);
});
