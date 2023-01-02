const arr = [
    [1, 2, 3],
    [4, [5, 6]],
    7,
    [
      [8, 9],
      10
    ]
  ];

  function abc(arr){
    let ans=[];
    let str = JSON.stringify(arr);
    for(let i = 0 ; i < str.length;i++){
        if(str[i] !== '[' & str[i] !== ']' & str[i] !== ',') ans.push(str[i]);

        else continue;
    }

    console.log(ans)

  }
  
  abc(arr)