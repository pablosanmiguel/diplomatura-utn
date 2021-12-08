import $ from "jquery";

var data = [
    {
        HelloText: "<p>¡Hola Mundo!</p><br/><h1>Me llamo Pablo y soy Desarrollador de Software y Páginas Web </h1>"
    }
];

window.onload = function () {
    document.getElementById("iron-giant").classList.add("stop-motion");

    var allElements = document.getElementsByClassName("typeing");
    for (var j = 0; j < allElements.length; j++) {
        var currentElementId = allElements[j].id;
        var currentElementIdContent = data[0][currentElementId];
        var element = document.getElementById(currentElementId);
        var devTypeText = currentElementIdContent;

        // type code
        var i = 0, isTag, text;
        (function type() {
            text = devTypeText.slice(0, ++i);
            if (text === devTypeText) return;
            element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
            var char = text.slice(-1);
            if (char === "<") isTag = true;
            if (char === ">") isTag = false;
            if (isTag) return type();
            setTimeout(type, 60);
        })();
    }
};

$(function () {
    $('.scroll').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 69
        }, 300);
        return false;
    });
});

