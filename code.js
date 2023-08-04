/* Set the width of the side navigation to 250px */
function openNav() {
  
  document.getElementById("Sidenav").style.width = "250px";
}

const navbarlist = document.querySelector(".navbar-link");
const openMenu = document.querySelector ("#openMenu");

openMenu.addEventListener("click", () => {
  navbarlist.classList.toggle("slideIn");
});

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
} 
