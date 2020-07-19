var nav = document.querySelector('.nav-bar');

if (window.innerWidth < 769) {
    nav.classList.remove("nav-display");
}

window.addEventListener('scroll', () => {
    var top = window.scrollY;
    if (top > 300) {
        nav.classList.add("nav-display");
    } else if (window.innerWidth > 768) {
        nav.classList.remove("nav-display");
    }
});
