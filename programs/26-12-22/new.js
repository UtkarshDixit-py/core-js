// // 4 8 12 16 20 24 28


// function abc(n,length){
    
//     // for(let i = n; i <= n*length ;i =i+n){
//     //     console.log(i)
//     // }
//     for(let i = 1;i<=length; i++){
//         console.log(n*i);
//     }
// }
// // console.log(abc())
// abc(4,5)

// why we use noscript

//where does react start //starting point in react

//can we use any other tag as container , other than div and empty tag

//events other than on and once 
//try triggering events during response and request
//why you have to export the modules
//why use node js and express rather than other tech stacks
//why it is not good for relational databases




// why we use noscript

//where does react start //starting point in react

//can we use any other tag as container , other than div and empty tag

//events other than on and once 
//try triggering events during response and request
//why you have to export the modules
//why use node js and express rather than other tech stacks
//why it is not good for relational databases
//what errors do we majorly face in node js
//purpose of node enviroments 


// Hello world system <-input
//Hello dlrow system <- output

function middle(s){
    // let str = s.split(" ");
    // let start = 0;
    // let end = str.length;
    // while(start<end){
    //     console.log(start,end)
    //     start++;
    //     end--;
    // }
    let middleIndex = s.length / 2;
    return Math.ceil(middleIndex) -1;
    
}

function reverse(str){
    let ans = ""
    for(let i = str.length -1 ;i>=0;i--){
       ans = ans + str[i]
    }
    return ans
}

function abc(str){
    let strArr = str.split(" ");
    let middleIndex = middle(strArr);
    console.log(middleIndex);
    let ans = []
    
    for(let i = 0;i < strArr.length;i++){
        if(i==middleIndex){
            ans.push(reverse(strArr[i]));
           
        }else{
            ans.push(strArr[i])
        }
    }
  console.log(ans)
    
}

abc("Hello world system space intern")
