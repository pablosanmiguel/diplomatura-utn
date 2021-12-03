import $ from "jquery";

window.onload = function () {
    document.getElementById("iron-giant").classList.add("stop-motion");
};

$(function () {
    $('.scroll').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 69
        }, 500);
        return false;
    });
});