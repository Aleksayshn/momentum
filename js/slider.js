
const slidePrevButton = document.querySelector('.slide-prev');
const slideNextButton = document.querySelector('.slide-next');

slidePrevButton.addEventListener('click', () => {
    chosenNumber = chosenNumber > 1 ? chosenNumber - 1 : imagesCount;
    updateBackgroundImage();
});

slideNextButton.addEventListener('click', () => {
    chosenNumber = chosenNumber < imagesCount ? chosenNumber + 1 : 1;
    updateBackgroundImage();
});

function updateBackgroundImage() {
    if (hour >= 6 && hour < 12) {
        body.style.backgroundImage = `url(images/morning/${chosenNumber}.webp)`;
    } else if (hour >= 12 && hour < 18) {
        body.style.backgroundImage = `url(images/afternoon/${chosenNumber}.webp)`;
    } else if (hour >= 18 && hour <= 23) {
        body.style.backgroundImage = `url(images/evening/${chosenNumber}.webp)`;
    } else {
        body.style.backgroundImage = `url(images/night/${chosenNumber}.webp)`;
    }
}