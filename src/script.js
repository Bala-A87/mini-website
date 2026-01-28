const messages = [
    "Aww don't say no...",
    "Think about it please",
    "Whyyyy",
    "I'll get you chocolates",
    "...and anything else you want",
    "Pleaseeeee",
    "You're breaking my heart",
    "Come on, please say yes",
    "Aww noooo",
    "Say yes pleaseee",
    "Look at that cute shy bear",
    "How can you keep saying no?!",
    "Pleaseeeee",
    "Just say yes onceee",
];
messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    noButton.textContent = messages[messageIndex];
    messageIndex += 1;
    messageIndex %= messages.length;

    const currSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "src/yes_page.html";
}