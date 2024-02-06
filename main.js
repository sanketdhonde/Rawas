const menuIcon = document.getElementById("menu-icon");
const slideoutMenut = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

searchIcon.addEventListener('click', function () {
  if (searchBox.style.top == '72px') {
    searchBox.style.top = '24px';
    searchBox.style.pointerEvents = 'none';
  }

  else {
    searchBox.style.top = '72px';
    searchBox.style.pointerEvents = 'auto';
  }
});


menuIcon.addEventListener('click', function () {
  if (slideoutMenut.style.opacity == "1") {
    slideoutMenut.style.opacity = '0';
    slideoutMenut.style.pointerEvents = 'none';
  }
  else {
    slideoutMenut.style.opacity = '1';
    slideoutMenut.style.pointerEvents == 'auto';
  }
})