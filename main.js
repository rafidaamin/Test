let menuBtn = document.getElementById("menu-btn");
let menu = document.getElementById("menu");

 let menuOpen = false;

menuBtn.addEventListener("click", function () {
if (menuOpen === false){
  menu.style.right = "0%";
  menuOpen = true;
}
else if(menuOpen === true){
  menu.style.right = "-50%";
  menuOpen = false;
}
});