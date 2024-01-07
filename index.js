let isDropdownHidden = true;

function toggleDropdown() {
  const button = document.getElementById("navbar-dropdown");
  const dropdown = document.getElementById("navbar-default");
  dropdown.classList.toggle("hidden");
  isDropdownHidden = !isDropdownHidden;
  button.setAttribute("aria-expanded", isDropdownHidden);
}

function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  const navbarHeight = document.getElementById("navbar").offsetHeight;
  console.log(navbarHeight);
  window.scrollTo({
    top: element.offsetTop - navbarHeight,
    behavior: "smooth"
  });
}

document.querySelectorAll("nav a").forEach(a => {
  a.addEventListener("click", function(e) {
    // Prevent default action (jumping to section)
    e.preventDefault();

    // Extract elementId from href
    const elementId = this.href.split("#")[1];
    console.log(elementId);
    // Call the scroll function
    scrollToElement(elementId);
  });
});