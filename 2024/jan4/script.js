const promise = new Promise((resolve,reject)=>{ resolve("wow success")})

promise.then((val)=> {return val})
        .finally((val)=>console.log("from finally" + val))
