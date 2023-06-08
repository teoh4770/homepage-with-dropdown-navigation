class App {
  constructor() {
    // variables
    this.arrowDownUrl = "./images/icon-arrow-down.svg";

    // $ indicates that this is an element, not variable
    this.$dropDownNavItems = document.querySelectorAll(".nav__item--dropdown");
    this.$navMobile = document.querySelector(".nav--mobile");
    this.$menuLogo = document.querySelector(".nav__menu-logo");
    this.$overlay = document.querySelector(".overlay");
    this.$menu = document.querySelector(".menu");
    this.$menuDropdown = document.querySelectorAll(".menu__item--dropdown");
    console.log(this.$menuDropdown);

    this.addEventListeners();
  }

  addEventListeners() {
    document.body.addEventListener("click", (event) => {
      this.handleDropdown(event);
      this.handleMenuDropdown(event);
      this.closeMenu(event);
    });

    this.$menuLogo.addEventListener("click", () => {
      this.$navMobile.classList.add("nav--mobile--openMenu");
    });
  }

  handleDropdown(event) {
    this.$dropDownNavItems.forEach((item) => {
      item.classList.remove("nav__dropdown--open");
    });

    if (event.target.closest(".nav__item--dropdown")) {
      const item = event.target.parentElement;
      item.classList.add("nav__dropdown--open");
    }
  }

  handleMenuDropdown(event) {
    if (event.target.closest(".menu__item--dropdown")) {
      const item = event.target.parentElement;
      item.classList.toggle("menu__dropdown--openMenu");
    }
  }

  closeMenu(event) {
    const overlayIsClicked = event.target.closest(".overlay");
    if (overlayIsClicked) {
      this.$navMobile.classList.remove("nav--mobile--openMenu");
    }
  }
}

new App();
