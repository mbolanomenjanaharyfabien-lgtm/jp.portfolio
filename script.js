function btn_menu() {
    let menuBar = document.getElementById("menu");
    menuBar.style.display = "none";
    let x = document.getElementById("x_menu");
    x.style.display = "block";
}
function btn_close(){
    let menuBar = document.getElementById("menu");
    menuBar.style.display = "block";
    let x = document.getElementById("x_menu");
    x.style.display = "none";
}