class stackComponent extends HTMLElement{
    constructor(){
        super();

        this.innerHTML = `
            <div class="stackContainer">
                <h1 class="bothstacks">Stacks</h1>
            </div>
        
            <div class="Stacks">
                <div class="frontEnd">
                <h1>Front-End</h1>
                <img src="./images/imageContainer/stackContainer/html_logo.png" class="stacklogos"/>
                <img src="./images/imageContainer/stackContainer/css_logo.png" class="stacklogos"/>
                <img src="./images/imageContainer/stackContainer/js_logo.png" class="stacklogos"/>
                <img src="./images/imageContainer/stackContainer/bootstrap_logo.png" class="stacklogos"/>
                <img src="./images/imageContainer/stackContainer/react_logo.png" class="stacklogos"/>
                </div>
                <div class="backEnd">
                <h1>Back-End</h1>
                <img src="./images/imageContainer/backEndStackContainer/java_logo.png" class="stacklogos"/>
                <img src="./images/imageContainer/backEndStackContainer/python_logo.jpg" class="stacklogos"/>
                <img src="./images/imageContainer/backEndStackContainer/nodejs_logo.jpg" class="stacklogos"/>
                <img src="./images/imageContainer/backEndStackContainer/mongodb_logo.png" class="stacklogos"/>
                </div>
            </div>
        `
    }
}

customElements.define('stack-component',stackComponent)