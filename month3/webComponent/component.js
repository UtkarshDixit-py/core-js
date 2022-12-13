// {/* <greeting-message></greeting-message> */}


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

// let list = document.getElementById('myList');
// // let list = document.createElement('ul');

// let listItem = document.createElement("li");

// let text1 = "my item 1(veg)";
// let text2 = "my item 2(non veg))";
// let text3 = "my item 3";

// let items = ["my item 1(veg)", "my item 2(non veg)", "my item 3(non veg)","my item 4(veg)"]

// for(let i = 0 ; i < items.length;i++){
//     let newItem = document.createElement("li")
//     newItem.innerText = items[i];
    




// listItem.innerText = text1;
// console.log(listItem);
// list.appendChild(listItem);






