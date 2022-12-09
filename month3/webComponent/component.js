{/* <greeting-message></greeting-message> */}


class GreetingMessage extends HTMLElement {
	
    constructor(){
        super();

        console.log("Constructed", this);

         // Render HTML
	this.innerHTML =
    `<p>
        <button>Hi there!</button>
    </p>
    <div class="message" aria-live="polite"></div>`;
    }

   

    connectedCallback(){
        console.log('connected',this);
    }

    disconnectedCallback(){
        console.log('disconnected',this)
    }
}

//defining new component
if('customElements' in window){
    customElements.define('greeting-message',GreetingMessage);
}

let greeting = document.querySelector('greeting-message');

// document.body.append(greeting);

// greeting.remove();