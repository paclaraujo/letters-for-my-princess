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

const showFinalMessage = (message) => finalMessage.innerHTML = message;

const openAndCloseOptions = (visibilityOne, visibilityTwo) => {
  offsetAndOptions.classList.add(visibilityOne);
  offsetAndOptions.classList.remove(visibilityTwo);

  writeLetter.classList.add(visibilityTwo);
  writeLetter.classList.remove(visibilityOne);
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
}

encodeBtn.addEventListener("click", () => {
  openAndCloseOptions("invisible", "visible");
  startCipher(offset.value);  
})

decodeBtn.addEventListener("click", () => {
  openAndCloseOptions("invisible", "visible");
  startCipher(-offset.value); 
})

returnToOptions.addEventListener("click", () => {
  openAndCloseOptions("visible", "invisible");
  clearInputs();
})

clear.addEventListener("click", clearInputs);