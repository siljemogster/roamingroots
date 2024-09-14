const spinnerWrapperEl = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => {
    spinnerWrapperEl.style.opacity = '1';

    setTimeout(() => {
        spinnerWrapperEl.style.display = 'none';
    }, 500);
});
