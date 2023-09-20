import './header.js';

window.addEventListener('load', ()=>{
    createHeaderList();
});

async function createHeaderList(){
    const response = await fetch('./components/headerComponents/header.json');
    const json = await response.json();
    const headerContainer = document.getElementById('header');

    json.header.forEach((header)=>{
        const element = document.createElement('header-component');
        element.header = header;
        headerContainer.appendChild(element);
    })
}