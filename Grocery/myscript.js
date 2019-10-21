$(document).ready(function(){

$("img").height(250);
$("img").width(250);
$("img").css("background-color", "white");

$("div").height(250);
$("div").width(500);



$("div").css("margin", "+=20px");

$("div").css("border", "2px solid black");
$("div").css("display", "flex");
$("div").css("justify-content", "space-between");
$("div").css("padding-right", "10px");

});

for (let i = 0; i < data.length; i++) {
	var obj = data[i];

	let productCard = document.createElement("div");

	let productImg = document.createElement("img");
	productImg.setAttribute("src",obj.imagesrc);

	let productName = document.createElement("h5");
	productName.textContent = obj.name;

	let productPrice = document.createElement("p");
	productPrice.textContent = obj.price;



	productCard.appendChild(productImg);

	productCard.appendChild(productName);
	productCard.appendChild(productPrice);

	document.getElementById("main").appendChild(productCard);
}