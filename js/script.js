var timeline = document.getElementById("timeline");

function scrollUp() {
    timeline.scrollBy(0, -50)
}

function scrollDown() {
    timeline.scrollBy(0, 50)
}

function reveal() {
    for (var reveals = document.querySelectorAll(".reveal"), i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight,
            elementTop, elementVisible = 150;
        reveals[i].getBoundingClientRect().top < windowHeight - 150 ? reveals[i].classList.add("active-animation") : reveals[i].classList.remove("active-animation")
    }
}
window.addEventListener("scroll", reveal), reveal();

var bnr = document.getElementById('publishedBanner');
var bnrSrc1 = document.getElementById('imgBanner1').src;
var bnrSrc2 = document.getElementById('imgBanner2').src;
var bnrSrc3 = document.getElementById('imgBanner3').src;

function bannerChanged1() {
    bnr.style.background = 'url(' + bnrSrc1 + ')';
}

function bannerChanged2() {
    bnr.style.background = 'url(' + bnrSrc2 + ')';
}

function bannerChanged3() {
    bnr.style.background = 'url(' + bnrSrc3 + ')';
}