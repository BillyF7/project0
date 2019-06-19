function navBarTextColor() {
    if (window.location.pathname == "project0/index.html") {
        document.getElementById("navLogo").style.color = 'red';
    }
}
document.getElementById("navBar").innerHTML =
    "Page path is " + window.location.pathname;
