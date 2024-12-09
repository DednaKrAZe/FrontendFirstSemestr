const linktomain=document.getElementById("linktomain");
const linktofirst=document.getElementById("linktofirst");
const linktosecond=document.getElementById("linktosecond");
const linktoservices=document.getElementById("linktoservices");
const linktoauto=document.getElementById("linktoauto");
const anchortolec=document.getElementById("lec");
const anchortosem=document.getElementById("prac");
const anchortoadress=document.getElementById("adressbut");
const anchortoprog=document.getElementById("rabprog");


linktomain.onclick=function() {
	window.location.href="first_page.html"
}

linktofirst.onclick=function(){
	window.location.href="#"
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

anchortolec.onclick=function () {
	window.location.href="#lec"
}

anchortosem.onclick=function () {
	window.location.href="#sem"
}

anchortoadress.onclick=function () {
	window.location.href="#map"
}

anchortoprog.onclick=function(){
	window.location.href="#prog"
}