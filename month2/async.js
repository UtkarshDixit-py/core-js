// const { applyEachSeries } = require("async");

const { reject } = require("async");


// Synchronous code
console.log("first");

console.log("second");

console.log("third");

// Async code

console.log("first");

setTimeout(()=>console.log("hello"),1000)

console.log("third");
// Javascript executes synchronous code first and then asynchronous code


//callbacks and callback hell

// const cart = ["product1","product2","product3"];

api.createOrder(cart,function(){
    api.proceedToPay(function(){
        api.orderSummary(function(){
            api.updateWallet()
        })
    })
})


function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}

let promise1 = job();

promise1

.then(function() {
    console.log('Success 1');
})

.then(function() {
    console.log('Success 2');
})

.then(function() {
    console.log('Success 3');
})

.catch(function() {
    console.log('Error 1');
})

.then(function() {
    console.log('Success 4');
});



console.log("----promises-----");

// Promises

//synatx
// let myPromise = new Promise(function(resolve, reject) {
//     
    
//       resolve(); // when successful
//       reject();  // when error
//     });

//     myPromise.then(
//         function(value) { /* code if successful */ },
//         function(error) { /* code if some error */ }
//       );


const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log("promise",fetchPromise);

fetchPromise.then((res)=>{
    let jsonPromise = res.json();
    jsonPromise.then((data)=>console.log(data))
    })


//Consuming  create order promise

function abc(){
    return new Promise((resolve,reject)=>{
        resolve();
    })
}

abc().then(()=>{
    console.log("first then ")
})



const cart = ["product1","product2","product3"];
createOrder(cart)
    .then(function (orderId){
        console.log(orderId);
         return orderId;
    })
    .then(function(orderId){
       return proceedToPay(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function(err){
        console.log(err);
    });  


//Creating createOrder Promise
 
function createOrder(cart){

    const pr = new Promise(function(resolve,reject){
         //createOrder
         //validateCart
         // send order ID
         if(!validateCart()){
            const err = new Error("Cart is not valid");
            reject(err);
         }
         //logic for createOrder
         const orderId = "52186";
         if(orderId){
            resolve(orderId);
         }
    });

    return pr;
}

function validateCart(){
    return true;
}
function proceedToPay(orderId){
    return new Promise(function(resolve,reject){
        resolve("payment resolved/successful",orderId)
    })
}


function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise

.then(function(data) {
    console.log(data);

    return job(true);
})

.then(function(data) {
    if (data !== 'victory') {
        return 'Defeat';
    }

    return job(false);
})

.then(function(data) {
    console.log(".then",data);
})

.catch(function(error) {
    console.log(".catch",error);

    return job(false);
})

.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(error);

    return 'Error caught';
})

.then(function(data) {
    console.log(data);

    return new Error('test');
})

.then(function(data) {
    console.log('Success:', data.message);
})

.catch(function(data) {
    console.log('Error:', data.message);
});

const p1 = new Promise((resolve, reject) => {
    resolve("Success");
  });


p1.then((value) => {
    console.log(value); // "Success!"
    return Promise.reject("oh, no!");
  })
    .catch((e) => {
      console.error(e); // "oh, no!"
    })
    .then(
      () => console.log("after a catch the chain is restored"),
      () => console.log("Not fired due to the catch")
    );


//promise combinators
// syntax
// Promise.combinatorname([
//     resolved/reject,
//     resolved/reject,
//     resolved/reject
// ])

//promise.all 

console.log("Promise.all",Promise.all([
    Promise.resolve("1resolve"),
    Promise.reject("2reject"),
    Promise.resolve("3resolve")
]))
//runs all promises at once and returns an array of all
//if any promise fails it fails every other promise


//promise.race
console.log("Promise.race",Promise.race([
    Promise.resolve("1resolve"),
    Promise.reject("2reject"),
    Promise.resolve("3resolve")
]))
//returns first resolved or rejected promise

console.log("Promise.allSettled",Promise.allSettled([
    Promise.resolve("1resolve"),
    Promise.reject("2reject"),
    Promise.resolve("3resolve")
]))

//Runs all promises at once and returns an array of all.
//If any promise fails, it returns other successful promises.


//Promise.any
console.log("Promise.any",Promise.any([
    Promise.reject("1reject"),
    Promise.reject("2reject"),
    Promise.resolve("3resolve")
]))
//only returns first fulfilled promise

//ASYNC AWAIT
function resolveAfter2Seconds(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('resolved')
        },2000)
    })
}
async function asyncCall(){
    console.log('calling');
    // const result = await resolveAfter2Seconds();
    console.log(await resolveAfter2Seconds())
}
asyncCall()


// AJAX

function run(){
    var xhr = new XMLHttpRequest();
    
    var url = 'https://jsonplaceholder.typicode.com/todos/1';

    xhr.open("GET",url,true);

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
        }
    }
    xhr.send();
}

run()


//.fetch for ajax call
  // Url for the request 
  var url = 'https://jsonplaceholder.typicode.com/todos/1';
  
  
  fetch(url, { method: 'GET' })
      .then(Result => Result.json())
      .then(string => {
          console.log(string);
          console.log(string.title);
      })
      .catch(error => { console.log(error); });





