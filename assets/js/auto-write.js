
const $ = document;
const landingTitle = $.querySelector(".landing__title");

window.addEventListener("load", () => {
  let landingText = "با ما خوشپوش ترین باشید";
  let typeIndex = 0;

  typeWriter(landingText, typeIndex)

});

function typeWriter(text, index) {
  if (index < text.length) {
    landingTitle.innerHTML += text[index];
    index++;
  }

  setTimeout(() => {
    typeWriter(text, index);
  }, 120);
}