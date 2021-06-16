const navigationMenu = () => {
  const menu = document.getElementById("navigation__checkbox");
  const navigationBackground = document.getElementById("navigation__background");
  let scrollPosition = 0;

  window.addEventListener("click", (e) => {
    console.log(e.target);
    if(e.target === navigationBackground) {
      menu.checked = false;
      menu.dispatchEvent(new Event("change", {"bubbles": true}));
    }
  });

  menu.addEventListener("change", () => {
    let body = document.getElementsByTagName("body")[0];
    if(menu.checked) {
      scrollPosition = window.scrollY;
      body.style.position = "fixed";
      body.style.width = "100%";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.left = `0`;
    }
    else {
      console.log(scrollPosition);
      body.style.position = "";
      body.style.overflow = "";
      body.style.top = "";
      window.scrollTo(0, scrollPosition );
    }
  });

};


export default navigationMenu;