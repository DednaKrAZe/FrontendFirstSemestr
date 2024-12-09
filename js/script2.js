const linktomain=document.getElementById("linktomain");
const linktofirst=document.getElementById("linktofirst");
const linktosecond=document.getElementById("linktosecond");
const linktoservices=document.getElementById("linktoservices");
const linktoauto=document.getElementById("linktoauto");
const anchortofront=document.getElementById("front");
const anchortoback=document.getElementById("back");


linktomain.onclick=function() {
	window.location.href="first_page.html"
}

linktofirst.onclick=function(){
	window.location.href="fs.html"
}

linktosecond.onclick=function(){
	window.location.href="#"
}

linktoservices.onclick=function(){
	window.location.href="second_page.html"
}

linktoauto.onclick=function () {
	window.location.href="#"
}

anchortofront.onclick=function(){
	window.location.href="#fronttext"
}

anchortoback.onclick=function(){
	window.location.href="#backtext"
}