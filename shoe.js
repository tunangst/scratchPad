const shoe = document.querySelector('#shoe');
const circle = document.querySelector('.cardsContainer .card .circle');
const buy = document.querySelector('.card .content a');
const yellow = document.querySelector('.content .color #yellow');
const green = document.querySelector('.content .color #green');
const blue = document.querySelector('.content .color #blue');
const red = document.querySelector('.content .color #red');

yellow.addEventListener('mouseover', () => {
    shoe.style.filter = 'hue-rotate(340deg)';
    // circle.style.filter = 'hue-rotate(347deg)';
    circle.style.backgroundColor = '#fff';
    buy.style.backgroundColor = '#ff0';
});
green.addEventListener('mouseover', () => {
    shoe.style.filter = 'hue-rotate(360deg)';
    // circle.style.filter = 'hue-rotate(360deg)';
    circle.style.backgroundColor = '#fff';
    buy.style.backgroundColor = '#9bdc28';
});
blue.addEventListener('mouseover', () => {
    shoe.style.filter = 'hue-rotate(130deg)';
    // circle.style.filter = 'hue-rotate(130deg)';
    circle.style.backgroundColor = '#fff';
    buy.style.backgroundColor = '#03a9f4';
});
red.addEventListener('mouseover', () => {
    shoe.style.filter = 'hue-rotate(280deg)';
    // circle.style.filter = 'hue-rotate(280deg)';
    circle.style.backgroundColor = '#fff';
    buy.style.backgroundColor = '#e91e63';
});
