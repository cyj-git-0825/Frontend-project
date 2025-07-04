"use strict";
(function() {
    const buttonEl = document.querySelector(".menu-button");
    const submenuEl = document.querySelector(".submenu");

    buttonEl.addEventListener("click", function() {
        submenuEl.classList.toggle("active");
    });

})();