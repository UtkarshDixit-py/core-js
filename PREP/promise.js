let PENDING = 0;
let FULFILLED = 1;
let REJECTED =2;

function customPromise(executor){

    let state = PENDING;
    let value = null;
    let handlers = [];
    let catcher = [];

    function resolve(result){
        if(state!==PENDING) return

        state = FULFILLED;
        value = result;
        handlers.forEach((h)=>h(value))

    }
    function reject(error){
        if(state!==PENDING) return

        state = REJECTED;
        value = error;
        catcher.forEach((c)=>c(value))

    }
    this.then = function(successCallback){
        // if(state===FULFILLED) successCallback(value)
        // else handlers.push(successCallback)

        if(state===FULFILLED){
            successCallback()
            return new customPromise((resolve,reject)=>resolve(successCallback(value)));
        }else{
            return new customPromise((resolve,reject)=>handlers.push(()=>resolve(successCallback(value))))
        }

    }
    this. catch = function(failedCallback){
        if(state===REJECTED) failedCallback()
        else catcher.push(failedCallback)
    }

    executor(resolve,reject);

}

let p1 = new customPromise((res,rej)=>{
    if(true) {
        setTimeout(()=>{res('** dot then is working')},1000)
    }
    else {
        setTimeout(()=>{rej('** dot catch is working')},1000)
    }
})

p1.then((value)=>{
    console.log(value);
    return value +67677676;
})
.then((v)=>{
    console.log(v)
})
// p1.catch((err)=>{
//     console.log(err)
// })