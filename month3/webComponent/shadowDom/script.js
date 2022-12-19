
customElements.define('cust-tag',
class extends HTMLElement{
    connectedCallback(){
        const temp = this.attachShadow({mode:'open'});

        temp.innerHTML =`<p>
        hello user attr is ${this.getAttribute('data')}</p>`;
    } 
}
)