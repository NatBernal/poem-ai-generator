function displayPoem(response) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-prompt");
  let apiKey = "tb2ao78a593914ebf4f9e2500f3e40d8";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a Poem expert writer of short poems. You have to generate a 4 line poem in basic HTML, please just give me the text and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem.";
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "Generating the poem. Please wait ...";

  axios.get(url).then(displayPoem);
}

let poemFormElement = document.querySelector(".poem-form");
poemFormElement.addEventListener("submit", generatePoem);
