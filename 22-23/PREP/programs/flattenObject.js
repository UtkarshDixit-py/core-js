const obj = {
    a: 1,
    b: {
      c: 2,
      d: [3, 4]
    }
  };
//   function flattenObj(obj){

 
//     let ansObj ={}
//     function generateFlatten(obj,parent){
//         for(let key in obj){
//             let newParent = parent+key;
//             console.log(newParent)
//             // let value  = obj[key]
//             if(typeof obj[key] ==='object'){
//                 generateFlatten(obj[key],newParent+".");
//             }else{
//                 ansObj[newParent] = obj[key]
//             }
//         }

//     }

//     generateFlatten(obj,"")
//     return ansObj;

//   }

  function flattenObj(obj){
    let ansObj = {}
    function generateFlatten(obj,parent){
        for(let key in obj){
            let newParent = parent + key
            if(typeof obj[key] == 'object'){
               
                generateFlatten(obj[key],newParent+".");
            }else{
                ansObj[newParent] =obj[key];
            }
        }
    
    }
    generateFlatten(obj,"");
    return ansObj

  }

  
  console.log(flattenObj(obj))

