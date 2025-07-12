onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

};
function toggleMenu() {
    var menu = document.getElementById('sideMenu');
    menu.classList.toggle('active');
}
