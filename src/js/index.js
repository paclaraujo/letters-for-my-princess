import cipher from "./cipher.js";

const message = document.querySelector("#message");
const offset = document.querySelector("#offset");
const encodeBtn = document.querySelector("#encode-btn");
const decodeBtn = document.querySelector("#decode-btn");
const finalMessage = document.querySelector("#final-message");
const offsetAndOptions = document.querySelector("#offset-and-options");
const writeLetter = document.querySelector("#write-letter");
const returnToOptions = document.querySelector("#return-to-options");
const clear = document.querySelector("#clear");
const errorMessage = document.querySelector("#error");

const showFinalMessage = (message) => finalMessage.innerHTML = message;

const openAndCloseOptions = (visibilityOne, visibilityTwo) => {
  offsetAndOptions.classList.add(visibilityOne);
  offsetAndOptions.classList.remove(visibilityTwo);

  writeLetter.classList.add(visibilityTwo);
  writeLetter.classList.remove(visibilityOne);
}

const validateOffset = (offset) => {
  const parsedOffset = Number(offset);

  if (isNaN(parsedOffset) || parsedOffset === ""){
    errorMessage.innerHTML = "Insira um número";
    return;
  }

  openAndCloseOptions("invisible", "visible");
  startCipher(parsedOffset);
}

const startCipher = (offset) => {
  message.addEventListener("input", () => {
    const cipheredMessage = cipher(offset, message.value);
    showFinalMessage(cipheredMessage)
  })
}

const clearInputs = () => {
  message.value = "";
  finalMessage.innerHTML = "";
  errorMessage.innerHTML = "";
  offset.value = "";
}

encodeBtn.addEventListener("click", () => validateOffset(offset.value))
decodeBtn.addEventListener("click", () => validateOffset(-offset.value))

returnToOptions.addEventListener("click", () => {
  openAndCloseOptions("visible", "invisible");
  clearInputs();
})

clear.addEventListener("click", clearInputs);