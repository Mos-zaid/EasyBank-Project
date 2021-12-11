/* Selector */
let hamburger = document.querySelector(".site-header__hamburger");
let mobileMenu = document.querySelector(".site-header__nav-links");
let isHamburgerShowing = true;

/* Events */
hamburger.addEventListener("click", toggleTheMenu );


/* Actions */
function toggleTheMenu() {
    mobileMenu.classList.toggle("site-header__nav-links__is-active");
    if (isHamburgerShowing){
        hamburger.innerHTML = '<img src="./images/icon-close.svg" alt="">'
        isHamburgerShowing = false;
    }else{
        hamburger.innerHTML = '<img src="./images/icon-hamburger.svg" alt="">'
        isHamburgerShowing = true;
    }
}