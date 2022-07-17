let sideNav = document.getElementById("sidenav");
let overlay = document.getElementById("overlay");

function myFunction(x) {
  x.classList.toggle("change");
  sideNav.classList.toggle("active");
  overlay.classList.toggle("hidden");
}

let dropdown = document.getElementsByClassName("dropbtn");

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    let dropdownContent = dropdown[i].children.item(2);
    console.log(dropdownContent.classList);
    dropdownContent.classList.toggle("hidden");
  });
}
