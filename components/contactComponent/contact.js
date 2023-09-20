class contactComponent extends HTMLElement{
    constructor(){
        super();

        this.innerHTML = `
            <div id="contact"class="form">
                <form onsubmit="sendMail(); reset(); return false;">
                    <h3>Contact</h3>
                    <input type="text" id="name" placeholder="Please Type Name" required>
                    <input type="email" id="email" placeholder="Please Type Eamil" required>
                    <input type="text" id="phone" placeholder="Please Type Phone">
                    <textarea id="message" rows="4" placeholder="Please Type Any Requiest"></textarea>
                    <button type="submit" >Send</button>
                </form>
            </div>
        `;
    }
}

customElements.define('contact-component',contactComponent)