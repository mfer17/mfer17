const menu = document.getElementById('option-menu-hamburger');
const iconShow = document.getElementById("menu-hamburger-open");
const iconClose = document.getElementById("menu-hamburger-close");

class MenuHamburgerOpen extends HTMLElement{
    constructor() {
        super();
        this.addEventListener('click', async (event) => {
            menu.classList.remove("hidden-options-menu");
            menu.classList.add("show-options-menu-mobile");
            iconShow.classList.remove("show-icon-menu-mobile");
            iconShow.classList.add("hidden-icon-menu-mobile");
            iconClose.classList.remove("hidden-icon-menu-mobile");
            iconClose.classList.add("show-icon-menu-mobile");
        })
    }
}

customElements.define('menu-hamburger-open', MenuHamburgerOpen);

class MenuHamburgerClose extends HTMLElement{
    constructor() {
        super();
        this.addEventListener('click', async (event) => {
            menu.classList.remove("show-options-menu-mobile");
            menu.classList.add("hidden-options-menu");
            iconClose.classList.remove("show-icon-menu-mobile");
            iconClose.classList.add("hidden-icon-menu-mobile");
            iconShow.classList.remove("hidden-icon-menu-mobile");
            iconShow.classList.add("show-icon-menu-mobile");
        })
    }
}

customElements.define('menu-hamburger-close', MenuHamburgerClose);


class MenuOptionHamburger extends HTMLElement{
    constructor() {
        super();
        console.log(this);
        this.addEventListener('click', async (event) => {
            menu.classList.remove("show-options-menu-mobile");
            menu.classList.add("hidden-options-menu");
            iconClose.classList.remove("show-icon-menu-mobile");
            iconClose.classList.add("hidden-icon-menu-mobile");
            iconShow.classList.remove("hidden-icon-menu-mobile");
            iconShow.classList.add("show-icon-menu-mobile");
        })
    }
}

customElements.define('menu-options-hamburger', MenuOptionHamburger);



