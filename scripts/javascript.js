document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu_icon");
    const menuNav = document.getElementById("menu_nav");


    menuIcon.addEventListener("click", function () {
        if (menuNav.style.display === "block") {
            menuNav.style.display = "none";
        } else {
            menuNav.style.display = "block";
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth >= 600) {
            menuNav.style.display = "";
        }
    });
});
