
const imagesCount = 20;
let chosenNumber = Math.floor(Math.random() * imagesCount) + 1;
const hour = new Date().getHours();
const body = document.querySelector('body');

if (hour >= 6 && hour < 12) {
    body.style.backgroundImage = `url(images/morning/${chosenNumber}.webp)`;
} else if (hour >= 12 && hour < 18) {
    body.style.backgroundImage = `url(images/afternoon/${chosenNumber}.webp)`;
} else if (hour >= 18 && hour <= 23) {
    body.style.backgroundImage = `url(images/evening/${chosenNumber}.webp)`;
} else {
    body.style.backgroundImage = `url(images/night/${chosenNumber}.webp)`;
}
