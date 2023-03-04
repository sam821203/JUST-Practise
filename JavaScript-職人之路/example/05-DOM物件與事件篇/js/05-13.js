var contentPhone = document.getElementById("contentPhone");
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var a4 = document.getElementById("a4");
var a5 = document.getElementById("a5");

window.onload = function () {};

function showPhoto() {
  contentPhone.style.backgroundImage =
    'url("../images/05/big/' + this.id + '.jpg")';
}

a1.addEventListener("click", showPhoto);
a2.addEventListener("click", showPhoto);
a3.addEventListener("click", showPhoto);
a4.addEventListener("click", showPhoto);
a5.addEventListener("click", showPhoto);
