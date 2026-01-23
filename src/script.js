const messages = ['Please say yes!', 'Aww please....!!'];
messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    // noButton.textContent = messages[messageIndex];
    // messageIndex += 1;
    // messageIndex %= messages.length;

    const currSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "src/yes_page.html";
}