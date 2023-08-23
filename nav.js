let displacement = 30;
/* Set the width of the side navigation to 250px */
function openNav() {
  
  document.getElementById("sidenav").style.width = "350px";
  document.getElementById("sidenav").style.transition = "500ms ease";
  
  document.getElementById("nvl1").style.opacity = "1";
  document.getElementById("nvl2").style.opacity = "1";
  document.getElementById("nvl3").style.opacity = "1";
  document.getElementById("nvl4").style.opacity = "1";
  document.getElementById("nvl5").style.opacity = "1";
  document.getElementById("nvl6").style.opacity = "1";
  document.getElementById("nvl7").style.opacity = "1";
  document.getElementById("nvl8").style.opacity = "1";
  document.getElementById("nvl9").style.opacity = "1";
  document.getElementById("nvl10").style.opacity = "1";
  document.getElementById("nvl1").style.transform = `translateX(${displacement}px)`;
  document.getElementById("nvl2").style.transform = `translateX(${displacement}px)`;
  document.getElementById("nvl3").style.transform = `translateX(${displacement}px)`;
  document.getElementById("nvl4").style.transform = `translateX(${displacement}px)`;
  document.getElementById("nvl5").style.transform = `translateX(${displacement}px)`;
  document.getElementById("nvl6").style.transform = `translateX(${displacement}px)`;
  document.getElementById("nvl7").style.transform = `translateX(${displacement}px)`;
  document.getElementById("nvl8").style.transform = `translateX(${displacement}px)`;
  document.getElementById("nvl9").style.transform = `translateX(${displacement}px)`;
  document.getElementById("nvl10").style.transform = `translateX(${displacement}px)`;
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("sidenav").style.transition = "none";
  
/*   document.getElementById("nvl3").style.transition = "none"; */
  document.getElementById("nvl1").style.opacity = "0";
  document.getElementById("nvl2").style.opacity = "0";
  document.getElementById("nvl3").style.opacity = "0";
  document.getElementById("nvl4").style.opacity = "0";
  document.getElementById("nvl5").style.opacity = "0";
  document.getElementById("nvl6").style.opacity = "0";
  document.getElementById("nvl7").style.opacity = "0";
  document.getElementById("nvl8").style.opacity = "0";
  document.getElementById("nvl9").style.opacity = "0";
  document.getElementById("nvl10").style.opacity = "0";
  document.getElementById("nvl11").style.opacity = "0";
  document.getElementById("nvl1").style.transform = `translateX(-${displacement}px)`;
  document.getElementById("nvl2").style.transform = `translateX(-${displacement}px)`;
  document.getElementById("nvl3").style.transform = `translateX(-${displacement}px)`;
  document.getElementById("nvl4").style.transform = `translateX(-${displacement}px)`;
  document.getElementById("nvl5").style.transform = `translateX(-${displacement}px)`;
  document.getElementById("nvl6").style.transform = `translateX(-${displacement}px)`;
  document.getElementById("nvl7").style.transform = `translateX(-${displacement}px)`;
  document.getElementById("nvl8").style.transform = `translateX(-${displacement}px)`;
  document.getElementById("nvl9").style.transform = `translateX(-${displacement}px)`;
  document.getElementById("nvl10").style.transform = `translateX(-${displacement}px)`;
  document.getElementById("nvl11").style.transform = `translateX(-${displacement}px)`;

};