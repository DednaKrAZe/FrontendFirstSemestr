const modal = document.getElementById("popup");
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementsByClassName("contact-form");
const sub = document.getElementById("sub");
const linktomain=document.getElementById("linktomain");
const linktofirst=document.getElementById("linktofirst");
const linktosecond=document.getElementById("linktosecond");
const linktoservices=document.getElementById("linktoservices");
const linktoauto=document.getElementById("linktoauto");
const anchortoshowcase=document.getElementById("shcs");
const anchortolorips=document.getElementById("tlorips");

console.log(modal);

btn.onclick = () => modal.style.display = "block";
btn1.onclick = () => modal.style.display = "block";
btn2.onclick = () => modal.style.display = "block";

span.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target === modal) {
modal.style.display = "none";
}
}
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

anchortolorips.onclick=function(){
	window.location.href="#lorips"
}

anchortoshowcase.onclick=function(){
	window.location.href="#showcase"
}