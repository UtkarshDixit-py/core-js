let objNew = {
    a: {
    b: {
    c: 5,
    },
    },
    };
    
    objClone = Object.assign({}, objNew);
    console.log("assign 1 ", objClone);
    objNew.a.b.c = 10;
    a = 10;
    console.log(objClone);