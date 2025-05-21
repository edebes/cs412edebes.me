var num = 0; // global variable

function toggleStyleSheet() {
    var styleElement = document.getElementById("mainStyleSheet");
    var currentStyle = styleElement.getAttribute("href");
    var newStyle;
    if (currentStyle === "Style1.css") {
        newStyle = "Style2.css";
    }
    else {
        newStyle = "Style1.css";
    }
    styleElement.setAttribute("href", newStyle);
    localStorage.setItem("styleSheet", newStyle);
}
window.onload = function() {
    var savedStyle = localStorage.getItem("styleSheet");
    var styleElement = document.getElementById("mainStyleSheet");
    if (savedStyle) {
        styleElement.setAttribute("href", savedStyle);
    }
}