let url = "https://icanhazdadjoke.com/";
let buttonTwo = document.getElementById("two");
let divTwo = document.querySelector(".output");

buttonTwo.addEventListener("click", () => {
  fetch(url, {
    headers: {"Accept": "application/json"},
  })
    .then((response) => {
      return response.json();
    })
    .then((jokeObject) => {
      return jokeObject.joke.toUpperCase();
    })
    .then((finalJoke) => {
      divTwo.innerHTML = finalJoke;
    })
    .catch((error) => {
      console.log("Oh no!, there's an error >>", error);
    });
});
