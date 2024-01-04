// function toggleDropdown() {
//   const dropdown = document.querySelector("#navbar-default");
//   const button = document.querySelector("#navbar-dropdown");
//   const body = document.querySelector("body");
//
//   const isExpanded = button.getAttribute("aria-expanded") === "true";
//   dropdown.classList.toggle("hidden", isExpanded);
//   button.setAttribute("aria-expanded", (!isExpanded).toString());
//   dropdown.classList.contains("hidden")
//     ? body.classList.remove("mt-10")
//     : body.classList.add("mt-10");
// }
let isDropdownHidden = true;

function toggleDropdown() {
  const button = document.getElementById("navbar-dropdown");
  const dropdown = document.getElementById("navbar-default");
  dropdown.classList.toggle("hidden");
  isDropdownHidden = !isDropdownHidden;
  button.setAttribute("aria-expanded", isDropdownHidden);
}

function openMenu() {}
