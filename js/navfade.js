(function() {

    const navbar = document.getElementById("fade-navbar");
    let fade = 0;

    window.addEventListener("scroll", function() {

        if (window.scrollY > 300 && fade < 1) fade += 0.1;

        if (window.scrollY < 300 && fade > 0) fade -= 0.2;

        navbar.style.backgroundColor = `rgba(52, 58, 64, ${fade})`;

    });

})();
