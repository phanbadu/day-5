var btn = document.querySelector('.search__btn')

btn.addEventListener('click', function() {
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus();
})