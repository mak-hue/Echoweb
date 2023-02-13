// menu toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");
let user = document.querySelector(".user");
let search = document.querySelector(".search");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
  user.classList.toggle("active");
  search.classList.toggle("active");
};

// add hovered class in seleted list item
let list = document.querySelectorAll(".navigation li");
function activeLink() {
  list.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", activeLink));
