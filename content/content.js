// Write all your JavaScript and JQuery code in this file! :)
var count = 0
$("#counter").on("click", function(){
	$("h1").eq(1).html(count + 1);
	count += 1;
});
$('#reset').on("click", function(){
	$("h1").eq(1).html(0);
	count = 0;
});

