
function abc(arr,k){
    let map = {};
    for(let i of arr){
        if(map[i]){
            map[i]++;
        }else{
            map[i] = 1;
        }
    }
    // let ansArr = Object.entries(map)
    let ansArr=[];
    let returnArr=[]

    for(let key in map){
        ansArr.push([map[key],key]);
    }
    ansArr.sort()
    console.log(ansArr)
    for(let i = ansArr.length -1  ; i <= k ;i--){
        console.log("reverse",ansArr[i]);
        k--;
        // while(k!=0){
        //     console.log("reverse",ansArr[i]);
        //     k--;
        // }    
        
    }
    
    return ansArr
}
console.log(abc([10,10,10,2,2,3,3,3,3,3,3,3],2));


// mini-css-extract-plugin
// uglifyjs-webpack-plugin
// REPL in nodejs


//know how to configure webpack for nodejs
//what is the prpose of express js
//body parser 
//commonly used library in nodejs

