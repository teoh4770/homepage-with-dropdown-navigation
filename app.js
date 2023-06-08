class App {
  constructor() {
    // variables
    this.arrowDownUrl = "./images/icon-arrow-down.svg";

    // $ indicates that this is an element, not variable
    this.$dropDownNavLinks = document.querySelectorAll(
      ".js-nav__link--dropdown"
    );
    this.$navDropDowns = document.querySelectorAll(".js-nav__dropdown");
    this.$navMobile = document.querySelector(".js-nav--mobile");
    this.$menuLogo = document.querySelector(".js-nav__menu-btn");
    this.$overlay = document.querySelector(".js-overlay");
    this.$menu = document.querySelector(".js-menu");
    this.$menuDropdown = document.querySelectorAll(".js-menu__item--dropdown");

    this.addEventListeners();
  }

  addEventListeners() {
    document.body.addEventListener("click", (event) => {
      this.handleDropdown(event);
      this.handleMenuDropdown(event);
      this.closeMenu(event);
    });

    this.$menuLogo.addEventListener("click", () => {
      this.$navMobile.classList.add("nav--mobile--show");
    });
  }

  handleDropdown(event) {
    if (event.target.closest(".js-nav__dropdown")) {
      return;
    }

    this.$navDropDowns.forEach((dropdown) => {
      dropdown.classList.remove("nav__dropdown--show");
    });

    this.$dropDownNavLinks.forEach((link) => {
      link.classList.remove("icon-change");
    });

    if (event.target.closest(".js-nav__link--dropdown")) {
      const link = event.target;
      const dropdownMenu = event.target.nextElementSibling;
      dropdownMenu.classList.add("nav__dropdown--show");
      link.classList.add("icon-change");
    }
  }

  handleMenuDropdown(event) {
    if (event.target.closest(".menu__item--dropdown")) {
      const link = event.target;
      const item = event.target.nextElementSibling;
      item.classList.toggle("menu__dropdown--show");
      link.classList.toggle("icon-change");
    }
  }

  closeMenu(event) {
    const overlayIsClicked = event.target.closest(".overlay");
    if (overlayIsClicked) {
      this.$navMobile.classList.remove("nav--mobile--show");
    }
  }
}

new App();
