var hamburguer__menu = document.getElementById("hamburguer__menu");
var header__menu = document.getElementById("header__menu");

hamburguer__menu.onclick = function (){
    toggleMenu();
}

function toggleMenu(){
    if(header__menu.style.visibility === 'hidden'){
        header__menu.style.visibility = 'visible'
    }else{
        header__menu.style.visibility = 'hidden'
    }
}