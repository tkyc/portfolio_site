(function() {

    const navbar = document.getElementsByClassName("bg-fade")[0];
    let prevPos = 0;
    let fade = 0;

    window.addEventListener("scroll", function() {

        if (window.scrollY > prevPos && fade < 1) {
            fade += 0.1;
            prevPos = window.scrollY;
        }

        if (window.scrollY < prevPos && fade > 0) {
            fade -= 0.2;
            prevPos = window.scrollY;
        }

        navbar.style.backgroundColor = `rgba(52, 58, 64, ${fade})`;

    });

})();
