function abc(s) {

    let str = s.split(" ");

    let end = str[str.length-1];

    return end.length;
};

console.log(abc("HEllo World"))