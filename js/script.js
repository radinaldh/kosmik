var timeline = document.getElementById("timeline");

function scrollUp() {
    timeline.scrollBy(0, -50)
}

function scrollDown() {
    timeline.scrollBy(0, 50)
}

// Animation

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active-animation");
        } else {
            reveals[i].classList.remove("active-animation");
        }
    }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();