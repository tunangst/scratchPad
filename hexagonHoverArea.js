const cursor = document.querySelector('#cursor');
const container = document.querySelector('.hexagonContainer5');
console.log('MADEIT');
window.onmousemove = function (e) {
    container.onmouseover = function (e) {
        timeout = setTimeout(function () {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY - container.clientHeight + 'px';
        });
    };
    container.onmouseout = function (e) {
        if (timeout) {
            clearTimeout(timeout);
        }
    };
};
