function setGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour >= 6 && hour < 12) {
        greeting = 'Good morning';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good afternoon';
    } else if (hour >= 18 && hour <= 23) {
        greeting = 'Good evening';
    } else {
        greeting = 'Good night';
    }

    const greetingElement = document.querySelector('.greeting');
    greetingElement.textContent = `${greeting}, `;
}

setGreeting();