class HeaderComponent  extends HTMLElement{
        constructor(){
            super();
        }
        

    set header(header){
        
        this.innerHTML = `
            <div class="rotate">

                <nav class="navbar">
                    <a class="navName" href="#Mainpage">${header.blogName}</a>
                    <ul class="nav-pills ">

                        <li class="nav-item">
                        <a class="nav-link" href="#Progrects">${header.firstMenu}</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#Certificate">${header.secondMenu}</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#Stacks">${header.thirdMenu}</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#contact">${header.forthMenus}</a>
                        </li>
                    </ul>
                </nav>

            </div>
        `;
    }
}

customElements.define('header-component', HeaderComponent );