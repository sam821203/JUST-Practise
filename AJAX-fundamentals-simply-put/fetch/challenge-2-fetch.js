let url = "https://icanhazdadjoke.com/";

let myHeaders = {
  Accept: "application/json",
};

// 1.選取所有需要的 HTML 元素
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
