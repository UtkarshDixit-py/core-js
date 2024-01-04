const arr = [
    [1, 2, 3],
    [4, [5, 6]],
    7,
    [
      [8, 9],
      10
    ]
  ];

//   function abc(arr){
//     let ans=[];
//     let str = JSON.stringify(arr);
//     for(let i = 0 ; i < str.length;i++){
//         if(str[i] !== '[' & str[i] !== ']' & str[i] !== ',') ans.push(str[i]);

//         else continue;
//     }

//     console.log(ans)

//   }


  function flatArray(arr){
    let ans = [];
    for(let i of arr){
        if(Array.isArray(i)) {
            ans.push(...flatArray(i))
        }else{
            ans.push(i);
        }
    }
    return ans;
  }
  
  function abcRecursion(arr){
    return arr.reduce((prev,curr)=>{
        if(Array.isArray(curr)){
            prev = prev.concat(abcRecursion(curr))
        }else{
            prev.push(curr);
        }
        return prev;
    },[])
  }

//   abc(arr)
  console.log(abcRecursion(arr))
  console.log(flatArray(arr))