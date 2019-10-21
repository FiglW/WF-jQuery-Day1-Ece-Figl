$("form").submit(function(e) {

	e.preventDefault();
	
	
	

});

//Remove the form from the page
//$("form").remove();

//Create 5 new DIVs in the article element
var newItem1 = $('<div>New Div1</div>');
$("article").prepend(newItem1);

var newItem2 = $('<div>New Div2</div>');
$("article").prepend(newItem2);

var newItem3 = $('<div>New Div3</div>');
$("article").prepend(newItem3);

var newItem4 = $('<div>New Div4</div>');
$("article").prepend(newItem4);

var newItem5 = $('<div>New Div5</div>');
$("article").prepend(newItem5);


//Within the input field change the value to "Search for..."
$("#msg").val("Search for....");



//Add a class name of "box" to each new DIV
$("div").addClass("box");

//Change the link to "www.codefactory.wien"

$("p>a").attr("href","www.codefactory.wien");