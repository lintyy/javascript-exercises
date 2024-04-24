const container = document.querySelector("#container");

const red = document.createElement("p");
red.style.color = "red";
red.textContent = "Hey I'm red!";

const blue = document.createElement("h3");
blue.style.color = "blue";
blue.textContent = "I'm a blue h3!";

const box = document.createElement("div");
const divContent = document.createElement("h1");
const divContent2 = document.createElement("p");
box.style.cssText = "border-syle: solid; border-width: 2px; background-color: pink";
divContent.textContent = "I'm in a div";
divContent2.textContent = "ME TOO!";

box.appendChild(divContent);
box.appendChild(divContent2);

container.appendChild(box);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    console.log(e.target);
  });