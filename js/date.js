(() => {
    const dateElement = document.querySelector('.date');

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentDate = new Date();
    const weekday = daysOfWeek[currentDate.getDay()];
    const month = monthsOfYear[currentDate.getMonth()];
    const day = currentDate.getDate();
    const dateString = `${weekday}, ${month} ${day}`;
    dateElement.innerHTML = dateString;
})();