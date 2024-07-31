// side menu
let sideMenuEl = document.getElementById("side-menu");
// burguer menu
let menuTrigger  = document.getElementById("menu-trigger");
// x
let menuClose  = document.getElementById("menu-close");


menuTrigger.addEventListener('click', showMenu());
sideMenuEl.addEventListener('click', hideMenu());


function showMenu(){
  // console.log(sideMenuEl);
  sideMenuEl.classList.add('show-menu');
}

function hideMenu(){
  menuTrigger.classList.remove('show-menu');
}
