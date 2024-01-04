// let s0 = new Square(5,5); will trhow error , cant make instance of class before declaring


class  Square{
    constructor(height , width){
        this.height = height;
        this.width = width;
    }
}

//unnamed
let Square2 = class{
    constructor(height , width){
        this.height = height;
        this.width = width;
    }
}

let s1 = new Square(5,5);
console.log(s1)



