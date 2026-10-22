// function btn_menu() {
//     let menuBar = document.getElementById("menu");
//     menuBar.style.display = "none";
//     let x = document.getElementById("x_menu");
//     x.style.display = "block";

//     let nav_resp = document.getElementById("nav_resp");
//     nav_resp.style.display =" block"  
//     nav_resp.style.width ="100%"  
//     nav_resp.style.gap ="2rem"  

//     let liste_resp = document.getElementById("liste_resp");
//     liste_resp.style.display =" inline-block"
//     liste_resp.style.marginTop ="3rem"
//     liste_resp.style.background ="none"

//     let liste = document.getElementsByTagName(".liste")
//     liste.style.color ="red"

// }
// function btn_close(){
//     let menuBar = document.getElementById("menu");
//     menuBar.style.display = "block";
//     let x = document.getElementById("x_menu");
//     x.style.display = "none";
//     let nav_resp = document.getElementById("nav_resp");
//     nav_resp.style.display ="none"
// }

// Récupération des éléments du DOM
const menuHamburger = document.getElementById('menu');
const menuClose = document.getElementById('x_menu');
const navResp = document.getElementById('nav_resp');

// Fonction pour ouvrir le menu
function btn_menu() {
    navResp.classList.add('active');
    menuHamburger.style.display = 'none';
    menuClose.style.display = 'block';
}

// Fonction pour fermer le menu
function btn_close() {
    navResp.classList.remove('active');
    menuHamburger.style.display = 'block';
    menuClose.style.display = 'none';
}

// Optionnel : Fermer le menu automatiquement quand on clique sur un lien
const navLinks = document.querySelectorAll('#liste_resp a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navResp.classList.contains('active')) {
            btn_close();
        }
    });
});