const textArea = document.getElementById("text_to_summarize");
const submitButton = document.getElementById("submit-button");
const summarizedTextArea = document.getElementById("summary");
const actionSelector = document.getElementById("action-selector");
const resultContainer = document.getElementById("result-container");

submitButton.disabled = true;
textArea.addEventListener("input", verifyTextLength);
submitButton.addEventListener("click", submitData);
actionSelector.addEventListener("change", updatePlaceholder);

function updatePlaceholder() {
  const action = actionSelector.value;
  if (action === "summarize") {
    textArea.placeholder = "Paste in some text to summarize. (Min length is 200 chars. Max length is 100,000 chars.)";
    summarizedTextArea.style.display = "block";
    const existingImg = resultContainer.querySelector("img");
    if (existingImg) existingImg.remove();
  } else {
    textArea.placeholder = "Enter a description of the image you want to generate...";
  }
  verifyTextLength({ target: textArea });
}

function verifyTextLength(e) {
  const textarea = e.target;
  const action = actionSelector.value;

  if (action === "summarize") {
    submitButton.disabled = !(textarea.value.length > 200 && textarea.value.length < 100000);
  } else {
    submitButton.disabled = textarea.value.length === 0;
  }
}

function submitData(e) {
  submitButton.classList.add("submit-button--loading");
  const action = actionSelector.value;
  const textInput = textArea.value;

  if (action === "summarize") {
    fetch('/summarize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text_to_summarize: textInput })
    })
      .then(response => response.text())
      .then(summary => {
        summarizedTextArea.value = summary;
        summarizedTextArea.style.display = "block";
        submitButton.classList.remove("submit-button--loading");
      })
      .catch(error => {
        console.error(error);
        submitButton.classList.remove("submit-button--loading");
      });
  } else if (action === "generate-image") {
    fetch('/generate-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: textInput })
    })
      .then(response => response.blob())
      .then(imageBlob => {
        const imageUrl = URL.createObjectURL(imageBlob);
        summarizedTextArea.style.display = "none";

        const existingImg = resultContainer.querySelector("img");
        if (existingImg) existingImg.remove();

        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.alt = "Generated Image";
        imgElement.style.width = "100%";
        imgElement.style.height = "auto";

        resultContainer.appendChild(imgElement);
        submitButton.classList.remove("submit-button--loading");
      })
      .catch(error => {
        console.error(error);
        submitButton.classList.remove("submit-button--loading");
      });
  }
}

updatePlaceholder();