const fibonacci = function(x) {
    let n1 = 0, n2 = 1, nextTerm, number=Number(x);
    if (Math.sign(x)=== -1) {
        return "OOPS";
    if (number === 1){
        return 1}
    
     }
    for (let i = 1; i < number; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return nextTerm

};

// Do not edit below this line
module.exports = fibonacci;
