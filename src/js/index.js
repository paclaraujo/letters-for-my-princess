import cipher from "./cipher.js";

const message = document.querySelector("#message");
const offset = document.querySelector("#offset");
const encodeBtn = document.querySelector("#encode-btn");
const decodeBtn = document.querySelector("#decode-btn");
const finalMessage = document.querySelector("#final-message");
const offsetAndOptions = document.querySelector("#offset-and-options");
const writeLetter = document.querySelector("#write-letter");
const returnToOptions = document.querySelector("#return-to-options");

const showFinalMessage = (message) => finalMessage.innerHTML = message;

const openOffsetSelection = () => {
    offsetAndOptions.classList.add("visible");
    offsetAndOptions.classList.remove("invisible");

    writeLetter.classList.add("invisible");
    writeLetter.classList.remove("visible");
}

const closeOffsetSelection = () => {
    offsetAndOptions.classList.add("invisible");
    offsetAndOptions.classList.remove("visible");

    writeLetter.classList.add("visible");
    writeLetter.classList.remove("invisible");
}



const startEncodeDecode = (type, offset) => {
    message.addEventListener("input", () => {
        if (type === "encode"){
            const encodedMessage = cipher(offset, message.value);
            showFinalMessage(encodedMessage)
        } else if (type === "decode"){
            const decodedMessage = cipher(-offset, message.value);
            showFinalMessage(decodedMessage)
        }
    })
}

encodeBtn.addEventListener("click", () => {
    closeOffsetSelection();
    startEncodeDecode("encode", offset.value);  
})

decodeBtn.addEventListener("click", () => {
    closeOffsetSelection();
    startEncodeDecode("decode", offset.value); 
})

returnToOptions.addEventListener("click", openOffsetSelection)