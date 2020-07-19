const degree = 6;
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

setInterval(() => {
    let day = new Date();
    let hours = day.getHours() * 30;
    let minutes = day.getMinutes() * degree;
    let seconds = day.getSeconds() * degree;
    hourHand.style.transform = `rotate3d(0,0,1,${hours + minutes / 12}deg)`;
    minuteHand.style.transform = `rotate3d(0,0,1,${minutes}deg)`;
    secondHand.style.transform = `rotate3d(0,0,1,${seconds}deg)`;
});
