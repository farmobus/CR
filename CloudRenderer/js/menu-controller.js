function MenuController(){
    menu = document.getElementById("menu");
    if (menu.className == "menu-hidden"){menu.className = "menu-visible";}
    else{menu.className = "menu-hidden";}
}