window.onload = function () {
  var a1 = document.getElementById("a1");
  var a2 = document.getElementById("a2");
  var a3 = document.getElementById("a3");
  var a4 = document.getElementById("a4");
  var a5 = document.getElementById("a5");
  var phone = document.getElementById("contentPhone");

  const angleLeft = document.getElementById("angleLeft");
  const angleRight = document.getElementById("angleRight");

  let idIndex = 1;

  a1.addEventListener("click", showPhoto);
  a2.addEventListener("click", showPhoto);
  a3.addEventListener("click", showPhoto);
  a4.addEventListener("click", showPhoto);
  a5.addEventListener("click", showPhoto);

  angleLeft.addEventListener("click", leftFunction);
  angleRight.addEventListener("click", rightFunction);

  function showPhoto() {
    idIndex = Number(this.id.substr(1));
    phone.style.backgroundImage = 'url("../images/05/big/' + this.id + '.jpg")';
  }

  function leftFunction() {
    idIndex--;

    if (idIndex === 0) idIndex = 5;

    phone.style.backgroundImage =
      'url("../images/05/big/a' + idIndex + '.jpg")';
  }

  function rightFunction() {
    idIndex++;

    if (idIndex > 5) idIndex = 1;

    phone.style.backgroundImage =
      'url("../images/05/big/a' + idIndex + '.jpg")';
  }
};
