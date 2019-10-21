//Change the href attribute to "www.codefactory.wien" for all links

$("a").attr("href","www.codefactory.wien");


//Change the text color to red for the <code> tags

$("Code").css("color","red");

//Change the background color to "#2a7b90" for all <li> elements which are direct child of an <ol> element

$("ol>li").css("background-color","#2a7b90");

//Within the form, change the placeholder text to "Express your opinion"

$("form textarea").attr("placeholder","Express your opinion");

// Replace all images on the page with this one "https://www.codefactory.wien/wp-content/uploads/2018/03/codefactory-vienna-footer-h.png"

$("img").attr("src","https://codefactory.wien/wp-content/uploads/2018/09/cropped-codefactory-vienna-footer-h-1-1.png");


//Change the background color to orange for all blockquote elements and the font-style to italic

$("Blockquote").css({"background-color":"orange", "font-style": "italic"});

//At the top of the page, change the logo color "Simple" to black and "Blog" to white
$("#logo").css("color", "black");
$("#logo>span").css("color", "white");

//Remove the "Oct 01, 2006" Date from the page

$(".date").remove();


//Extend the Sidebar Menu with 3 additional items "New Templates", "Order Template" and "Contact Us"

var newtemplate = $("<li><a>New Templates</a></li>");

var newtemplate2 = $("<li><a>Order Templat</a></li>");

var newtemplate3 = $("<li><a>Contact Us</a></li>");

$('.sidemenu:first-of-type>li:last-of-type').after(newtemplate);
$('.sidemenu:first-of-type>li:last-of-type').after(newtemplate2);
$('.sidemenu:first-of-type>li:last-of-type').after(newtemplate3);


//Change the sentence "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact." into "When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop."

$("p:contains('Believe')").text('I want a programming language in which I need only to say what I wish, and done, give him a lollipop.');