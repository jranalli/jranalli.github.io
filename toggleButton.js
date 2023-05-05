function changeNav() {
    var x = document.getElementById("navBar");
    if (x.className === "navigation") {
        x.className += " smallScreen";
    } else {
        x.className = "navigation";
    }
}