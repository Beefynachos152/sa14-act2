const block = document.getElementById('block');
const controlButton = document.getElementById('controlButton');
let isMoved = false;

controlButton.addEventListener('click', function() {
    if (!isMoved) {
        block.style.transform = 'translateX(300px)';
        isMoved = true;
    } else {
        block.style.transform = 'translateX(0)';
        isMoved = false;
    }
});