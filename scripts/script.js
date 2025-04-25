const menu = document.getElementById('option-menu-hamburger');
const iconShow = document.getElementById("menu-hamburger-open");
const iconClose = document.getElementById("menu-hamburger-close");
const yearNow = document.getElementById('year-now');

if(yearNow != null){
    yearNow.innerHTML = new Date().getFullYear();
}


/*const language = document.getElementById('select-language');



language.addEventListener('change', async (event) => {
    const elementsHTML = {
        about: document.querySelectorAll('.item-menu-about'),
        projects: document.querySelectorAll('.item-menu-projects'),
        proffessional_experience: document.querySelectorAll('.item-menu-proffessional-experience'),
        contact: document.querySelectorAll('.item-menu-contact')
    }

    console.log(event.target.value);
    //console.log(languages);
    fetch('./languages/languages.json')
    .then(response => response.json())  // Convierte la respuesta en un objeto JSON
    .then(data => {
        if(data.languages.find(element => element.type == event.target.value) != undefined){

            itemChange(elementsHTML.about, data.languages.find(element => element.type == event.target.value).translation.menu.about);
            
            itemChange(elementsHTML.projects, data.languages.find(element => element.type == event.target.value).translation.menu.project);

            itemChange(elementsHTML.proffessional_experience, data.languages.find(element => element.type == event.target.value).translation.menu.professional_experience);

            itemChange(elementsHTML.contact, data.languages.find(element => element.type == event.target.value).translation.menu.contact);
        }
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });
})*/

const itemChange = (elementChange, value) => {
    elementChange.forEach(element => {
        element.innerHTML = value
    });
}

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



