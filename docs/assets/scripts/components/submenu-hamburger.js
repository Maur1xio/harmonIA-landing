export function subMenuHamburguerStart(){
    const hamburguerMenu = document.querySelector(".hamburger__submenu");
    const buttonHamburger = document.querySelector(".button__toggle");
    const closeHamburguer = document.querySelector(".cont__close");
    const listItems = document.querySelectorAll(".nav__submenu__item");


    buttonHamburger.addEventListener("click",function(e){
        hamburguerMenu.classList.add("show__submenu");
    })
    closeHamburguer.addEventListener("click",function(e){
        hamburguerMenu.classList.remove("show__submenu");
    })


    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener("click",function(e){
            hamburguerMenu.classList.remove("show__submenu");
        })
    }

}