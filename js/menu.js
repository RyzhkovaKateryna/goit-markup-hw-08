(() => {
const menuBtnRef = document.querySelector("[data-menu-button]");
const mobileMenuRef = document.querySelector("[data-menu]");

menuBtnRef .addEventListener("click", () => { 
    const expanded = 
        menuBtnRef .getAttribute("artia-expanded") === "true" || false;
    
  
    menuBtnRef .classList.toggle("is__open");
    menuBtnRef .setAttribute("aria-expanded", !expanded);
  

    mobileMenuRef .modal.classList.toggle("is-open");
}); 
  })();