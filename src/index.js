function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Whispers of stars in the night's gentle breeze",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector(".poem-form");
poemFormElement.addEventListener("submit", generatePoem);
