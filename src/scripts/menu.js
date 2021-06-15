const navigationMenu = () => {
  const menu = document.getElementById("navigation__checkbox");
  const navigationBackground = document.getElementById("navigation__background");

  window.addEventListener("keypress", (e) => {
    if(e.key === "Escape"){
      console.log("se presiono escape")
    }
    console.log(e);
  });

  window.addEventListener("click", (e) => {
    console.log(e.target);
    if(e.target === navigationBackground) {
      menu.checked = false;
    }
  });

  menu.addEventListener("change", () => {
    if(menu.checked) {
      console.log("menu checked");
    }
    else {
      console.log("menu no checked");
    }
  });

};


export default navigationMenu;